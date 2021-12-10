import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { AuthResponse } from "../utils/response";
import { AuthInput } from "../utils/inputs";
import axios from "axios";
import * as bcrypt from "bcrypt";
import { User } from "../entity/User";

@Resolver()
export class UserResolver {
  @Query(() => String)
  ping() {
    return "pong !";
  }

  @Mutation(() => AuthResponse)
  async auth(@Arg("data") data: AuthInput): Promise<AuthResponse> {
    if (!data.id || !data.name || !data.email || !data.token)
      return {
        status: false,
        message: "Invalid Data !",
      };
    try {
      // verify token
      const verf = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${data.token}`
      );
      console.log("axios data => ", verf.data);
      // verify if token valid !
      if (verf.data.exp < Math.floor(new Date().getTime() / 1000))
        return {
          status: false,
          message: "Bad Token ! ",
        };
      // verify of email and id belong to the same token !
      if (verf.data.email != data.email || verf.data.sub != data.id)
        return {
          status: false,
          message: "Invalid Data !",
        };
      // check if user already exist
      if ((await User.find({ where: { email: data.email } })).length > 0) {
        // login
        return await this.login(data.email, data.id);
      } else {
        // create account !
        return await this.createAccount(data);
      }
    } catch (e) {
      //console.log("Something went wrong [AUTH] : ", e);
      return {
        status: false,
        message: "Something went wrong ! ",
      };
    }
  }

  // create account
  private async createAccount(data: AuthInput): Promise<AuthResponse> {
    try {
      const user = new User();
      user.email = data.email;
      user.name = data.name;
      user.auid = await bcrypt.hash(data.id, 5);
      await user.save();
      return {
        status: true,
        message: "Account created successfuly",
      };
    } catch (e) {
      console.log("something went wrong creating user account ! e : ", e);
      return {
        status: false,
        message: "Something went wrong !",
      };
    }
  }

  // login
  private async login(email: string, aid: string): Promise<AuthResponse> {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return {
        status: false,
        message: "User not found !",
      };
    }
    const v = await bcrypt.compare(aid, user.auid);
    if (!v)
      return {
        status: false,
        message: "Invalid Credentials",
      };
    return {
      status: true,
      message: "Logged successfuly",
    };
  }
}

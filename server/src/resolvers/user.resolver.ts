import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { AuthResponse } from "../utils/response";
import { AuthInput } from "../utils/inputs";
import axios from "axios";

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

      console.log("verfication -> ", verf);
      return {
        status: true,
        message: "Very good",
      };
    } catch (e) {
      console.log("Something went wrong [AUTH] : ", e);
      return {
        status: false,
        message: "Something went wrong ! ",
      };
    }
  }
}

import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { AuthResponse } from "../utils/response";
import { AuthInput } from "../utils/inputs";

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
      const verf = fetch();
    } catch (e) {
      console.log("Something went wrong [AUTH] : ", e);
      return {
        status: false,
        message: "Something went wrong ! ",
      };
    }

    return {
      status: false,
    };
  }
}

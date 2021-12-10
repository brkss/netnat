import { InputType, Field } from "type-graphql";

@InputType()
export class AuthInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  id: string;

  @Field()
  token: string;
}

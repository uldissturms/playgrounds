import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => String)
  title: string;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  created: Date;
}

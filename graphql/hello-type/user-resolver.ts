import {
  Resolver,
  FieldResolver,
  Query,
  Root
} from 'type-graphql'

import { User } from './user-type'

const createUser = (title: string, name: string) => {
  const u = new User()
  u.title = title
  u.name = name
  return u
};

const createDummyUsers = () => [
  createUser('Dr', 'John'),
  createUser('Mr', 'Clark'),
];

@Resolver(of => User)
export class UserResolver {
  private readonly items: User[] = createDummyUsers();

  @Query(returns => [User], { description: 'Get all the users' })
  async users(): Promise<User[]> {
    return await this.items;
  }

  @FieldResolver(returns => String)
  info(@Root() user: User): string {
    return `${user.name} - ${new Date()}`
  }
}

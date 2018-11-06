import {
    Resolver,
    Query,
} from 'type-graphql'

import { User } from './user-type'

const createDummyUsers = () => [
    new User(),
    new User()
]; 

@Resolver(of => User)
export class UserResolver {
    private readonly items: User[] = createDummyUsers();

    @Query(returns => [User], { description: 'Get all the users' })
    async users(): Promise<User[]> {
        return await this.items;
    }
}

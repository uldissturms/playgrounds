// import some large lib
import * as _ from 'lodash'
import * as t from 'io-ts'
import { either } from 'fp-ts/lib/Either'

const User = t.type({
  userId: t.number,
  name: t.string
})

let test: number = 1

export const handler = async event => {
  // test = 'what'
  console.log('I AM RUNNING')
  console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
  const user = User.decode({
    userId: 'fakeId',
    name: 'fakeName'
  })
  console.log('Fake user: ', user)
  const name = either.map(user, user => user.name)
  console.log('Fake user name: ', name)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
}

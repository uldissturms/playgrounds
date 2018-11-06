import 'reflect-metadata'
import * as path from 'path'
import { buildSchema } from 'type-graphql'
import * as express from 'express'
import * as grapqlHTTP from 'express-graphql'

import { UserResolver } from './user-resolver'

const run = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const app = express()
  app.use('/graphql', grapqlHTTP({
    schema,
    graphiql: true
  }))

  app.listen(process.env.PORT || 3000)
}

run()
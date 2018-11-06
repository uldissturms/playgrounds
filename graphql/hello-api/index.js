const express = require('express')
const grapqlHTTP = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  buildSchema
} = require('graphql')

const app = express()

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    profession: { type: GraphQLString }
  }
})

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve () {
          return '>> hello'
        }
      },
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLID }
        },
        resolve () {
          return {
            id: '1',
            name: 'John Doe',
            profession: 'Sales manager'
          }
        }
      }
    }
  })
})

app.use('/graphql', grapqlHTTP({
  schema,
  graphiql: true
}))

const stringSchema = buildSchema(`
  type User {
    id: ID!
    name: String!
    profession: String
  }
  type Query {
    hello: String,
    user: User
  }
`)

const root = {
  hello: () => {
    return 'world'
  },
  user: () => {
    return {
      id: 1,
      name: 'John Doe',
      profession: 'Sales manager'
    }
  }
}

app.use('/graphql-string', grapqlHTTP({
  schema: stringSchema,
  rootValue: root,
  graphiql: true
}))

app.listen(3000)

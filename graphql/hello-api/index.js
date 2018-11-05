const express = require('express')
const grapqlHTTP = require('express-graphql')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const app = express()

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
      world: {
        type: GraphQLString,
        resolve () {
          return '>> world'
        }
      }
    }
  })
})

app.use('/graphql', grapqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000)

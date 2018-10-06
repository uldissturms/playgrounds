const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello: String,
    throws: String
  }
`)

const root = {
  hello: () => {
    return 'Hello World!'
  },
  // https://facebook.github.io/graphql/draft/#sec-Errors
  throws: () => {
    const e = new Error('Some error occured!')
    e.code = 'CUSTOM_CODE_THAT_WILL_BE_IGNORED'
    e.extensions = {
      code: 'CUSTOM_CODE_THAT_WILL_BE_RETURNED',
      data: {
        key: 'value'
      }
    }
    throw e
  }
}

const run = async () => {
  let res = await graphql(schema, '{ hello }', root)
  console.log('HW:', res)
  res = await graphql(schema, '{ throws }', root)
  console.log('HT:', res)
  console.log('HTD:', JSON.stringify(res))
}

run()

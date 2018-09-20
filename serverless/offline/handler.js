'use strict'

const AWS = require('aws-sdk')

const region = 'localhost'
const endpoint = 'http://localhost:8080'

module.exports.offline = async (event, context) => {
  const dynamoDB = new AWS.DynamoDB({
    region,
    endpoint
  })
  const TableName = 'items'
  const dbs = await dynamoDB.listTables().promise()
  const db = await dynamoDB.describeTable({TableName}).promise()

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      out: {
        dbs,
        db
      }
    })
  }
}

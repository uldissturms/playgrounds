'use strict'

const db = require('./db')

module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(db)
  }
}

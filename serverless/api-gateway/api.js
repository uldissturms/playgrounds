'use strict'

module.exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'x-custom-header': 'custom-value'
    },
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }
}

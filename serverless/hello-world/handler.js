'use strict'

module.exports.hello = async (event, context) => {
  if (event.error) {
    throw new Error('Simulated error')
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }
}

module.exports.handler = async (event, context) => {
  console.log('[HANDLER] running....')
  return {
    httpStatusCode: 200,
    body: JSON.stringify({status: 'ok'})
  }
}

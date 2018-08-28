const express = require('express')

const app = express()
app.use('/', (req, res) => {
  res.json({
    message: 'Go Serverless v1.0! Your function executed successfully!'
  })
})

module.exports = app

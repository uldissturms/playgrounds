const supertest = require('supertest')
const app = require('./app')

test('app', () => {
  return supertest(app)
    .get('/')
    .expect(200)
    .expect('content-type', /json/)
    .expect(res => {
      expect(res.body.message).toMatch(/Go Serverless/)
    })
})

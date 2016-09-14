const test = require('tape')

test('promise is rejected when logic inside it throws exception', t => {
  new Promise((resolve, reject) => {
    throw new Error('exception')
  })
  .then(() => t.fail('exceptions are swallowed'))
  .catch(e => {
    t.pass('exceptions result in promise being rejected')
    t.end()
  })
})

test('promise handles most relevevant catch block', t => {
  new Promise((resolve, reject) => {
    throw new Error('base exception')
  })
  .catch(e => {
    const err = Error('custom exception')
    err.stack = e.stack
    throw err
  })
  .then(() => t.fail('custom exceptions are swallowed'))
  .catch(e => {
    console.log('handling custom exception')
    console.log(e.stack)
    t.pass('custom exceptions are handled')
    t.end()
  })
})

test('promise stays rejected after catch block', t => {
  new Promise((resolve, reject) => {
    throw new Error('exception')
  })
  .catch(e => {
    console.log('exception processed')
  })
  .then(() => {
    t.pass('promise was rejected but continues after catch block')
    t.end()
  })
})

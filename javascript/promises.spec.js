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

test('promise handles most relevant catch block', t => {
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

test('promise gets resolved after exception is handled', t => {
  new Promise((resolve, reject) => {
    throw new Error('exception')
  })
  .catch(e => {
    console.log('exception processed')
  })
  .then(() => {
    t.pass('handling a rejected promise makes it resolved... interesting...')
    t.end()
  })
})

test('nested promise errors bubble to top most promise', t => {
  Promise.resolve(42)
  .then(() => new Promise((resolve, reject) => {
      throw new Error('exception')
    })
  )
  .then(() => {
    t.fail('exception did not bubble')
  })
  .catch(e => {
    console.log('exception from nested promise handled')
    t.pass('exception is handled from nested promises')
    t.end()
  })
})

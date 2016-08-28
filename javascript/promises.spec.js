const test = require('tape')

test('promise is rejected when logic inside it throws exception', t => {
  new Promise((resolve, reject) => {
    throw new Error('exception')
  })
  .then(() => t.fail('exceptions are swallowed'))
  .catch(e => { t.pass('exceptions result in promise being rejected'); t.end() })
})

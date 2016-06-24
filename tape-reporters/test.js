const test = require('tape')

test('is okay', t => {
  t.plan(1)
  console.log('log: this test will be okay')
  t.ok('is okay')
})

test('is okay', t => {
  t.plan(1)
  console.log('log: this test will fail')
  t.notOk('is not okay')
})

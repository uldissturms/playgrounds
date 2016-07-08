const test = require('tape')

test('generator returns simple values twice and returns done', t => {
  t.plan(3)

  const iterator = simple()

  t.is(iterator.next().value, 1)
  t.is(iterator.next().value, 2)
  t.is(iterator.next().done, true)
})

function * simple () {
  yield 1
  yield 2
}

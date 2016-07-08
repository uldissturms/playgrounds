const test = require('tape')

test('reduce data as last argument', t => {
  t.deepEqual(apply([addOne], [1, 2, 3]), [2, 3, 4])
  t.end()
})

test('reduce data using multiple functions', t => {
  t.deepEqual(apply([addOne, multiplyByTwo], [1, 2, 3]), [4, 6, 8])
  t.end()
})

test('combined multiple functions', t => {
  const addOneAndMultiplyByTwo = combine(addOne, multiplyByTwo)
  t.deepEqual(addOneAndMultiplyByTwo([1, 2, 3]), [4, 6, 8])
  t.end()
})

function apply (functions, data) {
  return functions.reduce((acc, fn) => acc.map(fn), data)
}

function addOne (value) {
  return value + 1
}

function multiplyByTwo (value) {
  return value * 2
}

function combine (...args) {
  return function (data) {
    return args.reduce((acc, fn) => acc.map(fn), data)
  }
}

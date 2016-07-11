const test = require('tape')

test('bind first argument to increase reuse', t => {
  t.is(addOne(1), 2)
  t.end()
})

function addOne (to) {
  return add.bind(null, 1)(to)
}

function add (value, to) {
  return to + value
}

test('bind first argument to combine functions', t => {
  t.is(addOneAndMultiplyByTwo(1), 4)
  t.end()
})

function addOneAndMultiplyByTwo (value) {
  return combine(addOne, multiplyByTwo)(value)
}

function combine (left, right) {
  return function (value) {
    return right.bind(null, left(value))()
  }
}

function multiplyByTwo (value) {
  return multiply.bind(null, 2)(value)
}

function multiply (by, value) {
  return value * by
}

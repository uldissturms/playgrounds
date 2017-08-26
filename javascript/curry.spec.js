const test = require('tape')

test('simple curry implementation', t => {
  const fn = (a, b, c) => a + b + c
  const curried = curry(fn)
  t.is(curried(1, 2, 3), 6)
  t.is(curried(1, 2)(3), 6)
  t.is(curried(1)(2)(3), 6)
  t.is(curried(1)(2)(3, 4), 6)
  t.end()
})

function curry (fn, ...first) {
  return (...rest) => {
    const params = [...(first || []), ...(rest || [])]
    if (params.length >= fn.length) {
      return fn(...params)
    }
    return curry(fn, ...params)
  }
}

/* eslint-disable no-unused-vars */

// Borrowed from getify/Functional-Light-JS - more flexible version
// Allows to specify arity and is more explicit about function responsibilities
function curry2 (fn, arity = fn.length) {
  return (function nextCurried (prevArgs) {
    return (...nextArgs) => {
      const args = prevArgs.concat(nextArgs)
      if (args.length >= arity) {
        return fn(...args)
      }
      return nextCurried(args)
    }
  })([])
}

// https://www.npmjs.com/package/z

import test from 'ava'
import {matches} from 'z'

test('sum', t => {
  t.is(sum(3, 2), 5)
  t.is(sumP(3, 2), 5)
})

test('call stack', t => {
  t.is(sum(3, 10000), 10003)
  t.is(sumP(3, 1000), 1003)
})

const sum = (x, y) => {
  if (y === 0) {
    return x
  }

  return sum(x + 1, y - 1)
}

const sumP = (...args) =>
  matches(args)(
    (x, y = [0]) => x,
    (x, y) => sumP(x + 1, y - 1)
  )

/* flow runtime? import t from 'flow-runtime'
const sumF = (x, y) => t.match(x, y, [
  (x: number, y: 0) => x,
  (x, y) => sumF(x + 1, y - 1)
])
*/

'use strict'

const test = require('tape')

// Note: needs use strict and --harmony flag under node 7.5.0
test('propert tail call optimisation', t => {
  t.is(sum(1, 100000), 100001)
  t.end()
})

const sum = function (x, y) {
  if (y === 0) {
    return x
  }

  return sum(x + 1, y - 1)
}

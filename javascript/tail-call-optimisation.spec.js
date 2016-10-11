const test = require('tape')

test('tail call optimisation', t => {
  t.is(sum(1, 100000), 100001)
  t.end()
})

// credits: https://gist.github.com/Gozala/1697037
function tco (f) {
  var value
  var active = false
  var accumulated = []

  return function accumulator () {
    accumulated.push(arguments)

    if (!active) {
      active = true

      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }

      active = false

      return value
    }
  }
}

const sum = tco(function (x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1)
  } else {
    return x
  }
})

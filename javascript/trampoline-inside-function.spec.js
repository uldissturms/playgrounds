const test = require('tape')

test('use trampoline inside function to fix missing javascript TCO', t => {
  t.is(sum(1, 1000000), 1000001)
  t.end()
})

function trampoline (f) {
  while (f && f instanceof Function) {
    f = f()
  }
  return f
}

function sum (x, y) {
  function recur (x, y) {
    if (y > 0) {
      return () => recur(x + 1, y - 1)
    } else {
      return x
    }
  }

  return trampoline(() => recur(x, y))
}

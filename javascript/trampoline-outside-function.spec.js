// great explanation here: http://www.integralist.co.uk/posts/js-recursion.html
const test = require('tape')

test('use trampoline outside function to fix missing javascript TCO', t => {
  t.is(trampoline(() => sum(1, 1000000)), 1000001)
  t.end()
})

function trampoline (f) {
  while (f && f instanceof Function) {
    f = f()
  }
  return f
}

function sum (x, y) {
  if (y > 0) {
    return () => sum(x + 1, y - 1)
  } else {
    return x
  }
}

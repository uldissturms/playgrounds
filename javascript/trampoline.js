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

const result = sum(1, 25000000)
console.log('the sum is:', result)

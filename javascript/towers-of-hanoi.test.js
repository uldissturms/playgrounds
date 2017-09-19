import test from 'ava'

const moveTop = (from, to) =>
  to.push(from.pop())

const moveDisks = (n, from, to, buf) => {
  if (n === 0) {
    return
  }

  moveDisks(n - 1, from, buf, to)
  moveTop(from, to)
  moveDisks(n - 1, buf, to, from)
}

test('single disk tower', t => {
  const from = [1]
  const to = []
  moveDisks(from.length, from, to, [])
  t.deepEqual(from, [])
  t.deepEqual(to, [1])
})

test('three disk tower', t => {
  const from = [3, 2, 1]
  const to = []
  moveDisks(from.length, from, to, [])
  t.deepEqual(from, [])
  t.deepEqual(to, [3, 2, 1])
})

test('five disk tower', t => {
  const from = [5, 4, 3, 2, 1]
  const to = []
  moveDisks(from.length, from, to, [])
  t.deepEqual(from, [])
  t.deepEqual(to, [5, 4, 3, 2, 1])
})

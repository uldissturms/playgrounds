const test = require('ava')

const cache = {
  0: [],
  1: [[1]],
  2: [[2], [1, 1]],
  3: [[3], [2, 1], [1, 2], [1, 1, 1]]
}

const cacheAndReturn = (key, value) => {
  cache[key] = value
  return value
}

const walk = left => {
  if (cache[left]) {
    return cache[left]
  }

  return cacheAndReturn(left, [
    ...walk(left - 1).map(s => [...s, 1]),
    ...walk(left - 2).map(s => [...s, 2]),
    ...walk(left - 3).map(s => [...s, 3])
  ])
}

const countsCache = {
  0: 0,
  1: 1,
  2: 2,
  3: 4
}

const countWalks = left => {
  if (countsCache[left]) {
    return countsCache[left]
  }

  return cacheAndReturn(
    left,
    countWalks(left - 1) + countWalks(left - 2) + countWalks(left - 3)
  )
}

test('walk 1 returns single option', t => {
  t.deepEqual(walk(1), [[1]])
})

test('walk 2 returns 2 options', t => {
  t.deepEqual(walk(2), [[2], [1, 1]])
})

test('walk 3 returns 4 options', t => {
  t.deepEqual(walk(3), [[3], [2, 1], [1, 2], [1, 1, 1]])
})

test('walk 5 combines options from base cases', t => {
  t.deepEqual(walk(5), [
    [3, 1, 1],
    [2, 1, 1, 1],
    [1, 2, 1, 1],
    [1, 1, 1, 1, 1],
    [2, 2, 1],
    [1, 1, 2, 1],
    [1, 3, 1],
    [3, 2],
    [2, 1, 2],
    [1, 2, 2],
    [1, 1, 1, 2],
    [2, 3],
    [1, 1, 3]
  ])
})

test('count walks for 5', t => {
  t.is(countWalks(5), 13)
})

test('count walks for 30', t => {
  t.is(countWalks(30), 53798080)
})

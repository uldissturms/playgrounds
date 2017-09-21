import test from 'ava'

test('fill array with 1,000,000 integers', t => {
  const before = process.memoryUsage()

  const arr = []
  const count = 1000000
  for (let i = 0; i < count; i++) {
    arr.push(i)
  }

  const after = process.memoryUsage()
  const heapDiffInMB = (after.heapUsed - before.heapUsed) / (1024 * 1024)

  t.truthy(heapDiffInMB < 28)
})

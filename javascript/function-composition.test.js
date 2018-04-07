import test from 'ava'

const compose = (...fns) => obj =>
  fns.reduceRight((acc, cur) => cur(acc), obj)

const data = {some: `data`}

test('returns result after application', t => {
  const success = x => _ => x
  t.deepEqual(process('succes', success), data)
})

test('re-throws error on failure', t => {
  const failure = _ => _ => undefined.a
  t.throws(process('failure', failure))
})

test('supports async fns', async t => {
  const success = x => async _ => x
  t.deepEqual(await process('asyncSuccess', success), data)
})

const process = (name, fn) => compose(
  handleError(name),
  log(name),
  fn
)(data)

const log = name => fn => {
  console.log(`${name}.Enter`)
  try {
    const res = fn()
    console.log(`${name}.Success`, res)
    return _ => res
  } catch (err) {
    console.log(`${name}.Error ${err.message}`)
    return _ => { throw err }
  }
}

const handleError = name => fn => {
  try {
    return fn()
  } catch (err) {
    return _ => { throw new Error(`${name}.GenericError`) }
  }
}

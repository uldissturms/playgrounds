import * as R from 'ramda'

const a = (x: number): number =>
  x * 2

const b = (x: number): string =>
  x.toString()

const c = R.compose(b, a)

const res = c(1)

console.log(`ouptput ${res}`)

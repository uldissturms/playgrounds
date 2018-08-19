debugger

const a: string = 'something'
const b: string = 'another-value'
const c: number = 1

const doStuff = (x: number): string =>
  x.toString()

console.log(a)
console.log(b)
console.log(c)
console.log('stuff', doStuff(c))

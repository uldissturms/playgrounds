type hello = {
  name: string,
  age: number
}

const say = (x: hello) =>
  console.log(`Hello: ${x.name}, You are ${x.age} of age`)

say({ name: 'Bob', age: 39})

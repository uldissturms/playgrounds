interface Hello {
  name: string
  age: number
}

const say = (x: Hello) =>
  console.log(`Hello: ${x.name}, You are ${x.age} of age`)

say({ name: 'Bob', age: 39})

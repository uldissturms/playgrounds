const isUndefined = node =>
  typeof node === 'undefined'

const node5 = {data: 5}
const node4 = {data: 4, next: node5}
const node3 = {data: 3, next: node4}
const node2 = {data: 2, next: node3}
const node1 = {data: 1, next: node2}

const head = node1

console.log('=== loop ===')
loop(head)
console.log('=== recursion ===')
recurse(head)
console.log('=== reverse - manual ===')
outer(head)(node5)(node4)(node3)(node2)(node1)
console.log('=== reverse - recursion ===')
reverse(head, outer(head))
console.log('=== reverse - half way ===')
reverse(head, half(head))

function loop (node) {
  while (!isUndefined(node)) {
    console.log('loop:', node.data)
    node = node.next
  }
}

function recurse (node) {
  if (isUndefined(node)) {
    return
  }
  console.log('recurse:', node.data)
  return recurse(node.next)
}

function reverse (node, fn) {
  if (isUndefined(node.next)) {
    return fn(node)
  }

  const func = reverse(node.next, fn)
  if (isUndefined(func)) {
    return
  }
  return func(node)
}

function outer (head) {
  if (isUndefined(head)) {
    return
  }

  return function inner (tail) {
    console.log('head:', head.data, 'tail:', tail.data)
    return outer(head.next)
  }
}

function half (head) {
  return function inner (tail) {
    console.log('head:', head.data, 'tail:', tail.data)
    if (head === tail) {
      return
    }
    return half(head.next)
  }
}

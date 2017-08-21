const tree3 = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 3
    },
    right: {
      data: 4
    }
  },
  right: {
    data: 5,
    left: {
      data: 6
    },
    right: {
      data: 7
    }
  }
}

const tree4 = {
  data: 8,
  left: tree3,
  right: {
    data: 9,
    left: {
      data: 10,
      left: {
        data: 11
      },
      right: {
        data: 12
      }
    },
    right: {
      data: 13,
      left: {
        data: 14
      },
      right: {
        data: 15
      }
    }
  }
}

const isNot = f => value => !f(value)
const isUndef = x => typeof x === 'undefined'
const isNotUndef = isNot(isUndef)

const data = (value = {}) => value.data
const addNodes = (comb, nodes) => comb.map(c => [...c, ...nodes.map(data)])

const combinations = (n, comb) => {
  if (isUndef(n)) {
    return comb
  }
  if (isUndef(n.left) && isUndef(n.right)) {
    return comb
  }

  if (isUndef(n.left) || isUndef(n.right)) {
    return [addNodes(comb, [n.left || n.right])]
  }

  const leftFirst = addNodes(comb, [n.left, n.right])
  const rightFirst = addNodes(comb, [n.right, n.left])

  return [
    ...combinations(n.right, combinations(n.left, leftFirst)),
    ...combinations(n.right, combinations(n.left, rightFirst))
  ]
}

const walk = n =>
  combinations(n, [[data(n)]])

const report = (lvl, tree) => {
  const result = walk(tree)
  console.log(`${lvl} levels (${result.length}):`, result)
}

report(4, tree4)
report(3, tree3)
report(2, {data: 1, left: {data: 2}, right: {data: 3}})
report(1, {data: 1})
report(0, undefined)

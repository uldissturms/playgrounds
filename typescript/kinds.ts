type Circle = { kind: 'circle', radius: number }
type Rectangle = { kind: 'rectangle', w: number, h: number }
type Square = { kind: 'square', size: number }

type Shape = Circle | Rectangle | Square

const area = (s: Shape): number => {
  switch (s.kind) {
    case 'circle':
      return s.radius * Math.PI / 2
    case 'rectangle':
      return s.w * s.h
    case 'square':
      return s.size ** 2
  }
}

const c: Circle = { kind: 'circle', radius: 2 }
const r: Rectangle = { kind: 'rectangle', w: 2, h: 3 }
const s: Square = { kind: 'square', size: 2 }

const logCircle = (c: Circle): void =>
  console.log('circle:', area(c))
const logRectangle = (r: Rectangle): void =>
  console.log('rectangle', area(r))
const logSquare = (s: Square): void =>
  console.log('square', area(s))

logCircle(c)
logRectangle(r)
logSquare(s)

const test = require('tape')

test('scores gutter game', t => {
  t.is(score(rolls(0, 20)), 0)
  t.end()
})

test('scores normal game', t => {
  t.is(score([1, 2, 8, 1, ...rolls(0, 16)]), 12)
  t.end()
})

test('scores game with spare', t => {
  t.is(score([1, 9, 1, ...rolls(0, 17)]), 12)
  t.end()
})

test('scores game with spare at the end', t => {
  t.is(score([...rolls(0, 18), 4, 6, 1]), 11)
  t.end()
})

test('scores game with strike', t => {
  t.is(score([10, 1, 2, ...rolls(0, 16)]), 16)
  t.end()
})

test('scores game with strike and spare', t => {
  t.is(score([10, 4, 6, 1, ...rolls(0, 15)]), 32)
  t.end()
})

test('scores perfect game', t => {
  t.is(score(rolls(10, 12)), 300)
  t.end()
})

function score (rolls) {
  return pipe(toFrames, base, spares, strikes, total)(rolls)
}

function pipe (...fns) {
  return function (data) {
    return fns.reduce((acc, fn) => fn(acc), data)
  }
}

function toFrames (rolls, frames = [], index = 0) {
  if (lastFrame(index)) {
    return [...frames, frame(rolls, index)]
  }

  const rollsInFrame = isStrike(rolls) ? rolls.slice(0, 1) : rolls.slice(0, 2)
  return toFrames(rolls.slice(rollsInFrame.length), [...frames, frame(rollsInFrame, index)], index + 1)
}

function lastFrame (index) {
  return index === 9
}

function frame (rolls, index) {
  return {rolls, index}
}

function base (frames) {
  return frames.map(f => Object.assign({}, f, {score: sum(f.rolls)}))
}

function spares (frames) {
  return frames
    .map(f => applyBonus(f, isSpare, sum(take(frames, f.index + 1, 1))))
}

function take (frames, from, upTo) {
  return frames
    .slice(from)
    .map(f => f.rolls)
    .reduce((acc, cur) => [...acc, ...cur], [])
    .slice(0, upTo)
}

function applyBonus (frame, test, bonus) {
  if (bonusDoesNotApplyTo(frame, test)) {
    return frame
  }

  return Object.assign({}, frame, {score: frame.score + bonus})
}

function bonusDoesNotApplyTo (frame, test) {
  return frame.index === 9 || !test(frame.rolls)
}

function strikes (frames) {
  return frames
    .map(f => applyBonus(f, isStrike, sum(take(frames, f.index + 1, 2))))
}

function total (frames) {
  return sum(frames.map(f => f.score))
}

function isSpare (rolls) {
  return sum(rolls) === 10 && isNotStrike(rolls)
}

function isNotStrike (rolls) {
  return !isStrike(rolls)
}

function isStrike (rolls) {
  return rolls[0] === 10
}

function sum (items) {
  return items.reduce((acc, value) => acc + value, 0)
}

function rolls (value, times, state = []) {
  if (times === 0) {
    return state
  }

  return rolls(value, times - 1, [...state, value])
}

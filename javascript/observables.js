// implementations taken from https://frontendmasters.com/courses/advanced-async-js
// reference: https://jsbin.com/nururar/edit?js,console

class Observable {
  constructor (subscribe) {
    this._subscribe = subscribe
  }
  subscribe (o) {
    return this._subscribe(o)
  }
}

const timeout = time =>
  new Observable(o => {
    const handle = setTimeout(() => {
      o.next(time)
      o.complete()
    }, time)

    return {
      unsubscribe () {
        clearTimeout(handle)
      }
    }
  })

const fromEvent = (dom, eventName) =>
  new Observable(o => {
    const handler = ev => {
      o.next(ev)
    }
    dom.addEventListener(eventName, handler)

    return {
      unsubscribe () {
        dom.removeEventListener(eventName, handler)
      }
    }
  })

const map = (fn, observer) =>
  new Observable(o =>
    observer.subscribe({
      next (x) {
        o.next(fn(x))
      },
      erorr (e) {
        o.error(e)
      },
      complete () {
        o.complete()
      }
    })
  )

const fail = (times) => {
  let left = times
  return new Observable(o => {
    if (left > 0) {
      left--
      return o.error(new Error('Something bad happened'))
    }

    o.next()
    o.complete()
  })
}

const concat = (...observables) =>
  new Observable(o => {
    let current
    const processNth = idx => {
      current = observables[idx].subscribe({
        next (x) {
          o.next(x)
        },
        complete () {
          if (idx === observables.length - 1) {
            return o.complete()
          }
          processNth(idx + 1)
        },
        error (e) {
          o.error(e)
        }
      })
    }
    processNth(0)
    return {
      unsubscribe () {
        current.unsubscribe()
      }
    }
  })

const retry = (num, observable) =>
  new Observable(o => {
    let current
    const process = num => {
      current = observable.subscribe({
        next (x) {
          o.next(num)
        },
        complete () {
          o.complete()
        },
        error (e) {
          if (num === 0) {
            return o.error(e)
          }
          process(num - 1)
        }
      })
    }

    process(num)

    return {
      unsubscribe () {
        current.unsubscribe()
      }
    }
  })

const log = name => ({
  next (x) {
    console.log(`[${name}] [next] ${JSON.stringify(x)}`)
  },
  error (e) {
    console.error(`[${name}] [error] ${e}`)
  },
  complete () {
    console.log(`[${name}] [complete]`)
  }
})

// timeout
const timeObs = timeout(500)
timeObs.subscribe(log('time')) // next, complete
timeObs.subscribe(log('time')).unsubscribe() // clears out timeout immediately

// dom
const fakeElem = () => {
  let handlers = {}
  return {
    addEventListener (e, h) {
      if (handlers[e]) {
        handlers[e].push(h)
      } else {
        handlers[e] = [h]
      }
    },
    removeEventListener (e, h) {
      handlers[e] = (handlers[e] || []).filter(x =>
        x !== h
      )
    },
    trigger (e, data) {
      for (const handler of handlers[e] || []) {
        handler(data)
      }
    }
  }
}
const elem = fakeElem()
const clicks = fromEvent(elem, 'click')
clicks.subscribe(log('event'))
elem.trigger('click', {x: 1})
elem.trigger('click', {x: 2})

// map
const getX = ({x}) => x
const mapObs = map(getX, clicks)
const mapSub = mapObs.subscribe(log('map'))
elem.trigger('click', {x: 3})
elem.trigger('click', {x: 4})
mapSub.unsubscribe()
elem.trigger('click', {x: 5})

// concat
const concatObs = concat(
  timeout(500), timeout(1), timeout(2), timeout(3)
)
concatObs.subscribe(log('concat'))

// retry
const retryObsSucceeds = retry(3, fail(3))
retryObsSucceeds.subscribe(log('retry-success'))

const retryObsErrors = retry(3, fail(4))
retryObsErrors.subscribe(log('retry-fails'))

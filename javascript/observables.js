// implementations take from https://frontendmasters.com/courses/advanced-async-js

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
      o.next()
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

const log = name => ({
  next (x) {
    console.log(`[${name}] [next] ${JSON.stringify(x)}`)
  },
  error (e) {
    console.error(`[${name}] [error] ${JSON.stringify(e)}`)
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

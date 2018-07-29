import React, {Component} from 'react'
import List from './List'
import Filter from './Filter'

const itemFor = status => text => ({
  text,
  status
})
const newItem = itemFor('NEW')

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: '',
      items: [],
      filter: 'ALL'
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.markAs = this.markAs.bind(this)
    this.filter = this.filter.bind(this)
  }

  onChange (e) {
    this.setState({term: e.target.value})
  }

  markAs (status) {
    return idx => {
      const {items} = this.state
      this.setState(
        {
          items: [
            ...items.slice(0, idx),
            itemFor(status)(items[idx].text),
            ...items.slice(idx + 1)
          ]
        }
      )
    }
  }

  filter (status) {
    this.setState(
      {filter: status}
    )
  }

  onSubmit (e) {
    e.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, newItem(this.state.term)]
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{display: 'inline'}}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <Filter filter={this.filter} status={this.state.filter} />
        <List filter={this.state.filter} items={this.state.items} markAs={this.markAs} />
      </div>
    )
  }
}

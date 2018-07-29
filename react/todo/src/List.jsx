import React from 'react'

const format = ({status, text}) =>
  status === 'DONE'
    ? <del>{text}</del>
    : text

const toggleStatus = status =>
  status === 'NEW' ? 'DONE' : 'NEW'

export default ({items, markAs, filter}) => (
  <ul>
    {
      items && items
        .map((item, idx) =>
          filter === 'ALL' || item.status === filter
            ? (<li key={idx}>
              <a href='#' onClick={() => markAs(toggleStatus(item.status))(idx)}>
                {format(item)}
              </a>
            </li>)
            : null
        )
    }
  </ul>
)

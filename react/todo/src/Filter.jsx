import React from 'react'

const liStyle = {
  display: 'inline',
  paddingRight: '8px'
}

export default ({filter, status}) => (
  <ul style={{display: 'inline'}}>
    {
      ['ALL', 'NEW', 'DONE'].map(x =>
        <li key={x} style={liStyle}>
          {
            x === status
              ? x
              : <a href='#' onClick={() => filter(x)}>{x}</a>
          }
        </li>
      )
    }
  </ul>
)

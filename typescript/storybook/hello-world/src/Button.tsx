import * as React from 'react'

export interface Props {
  bg: string
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

const noop = () => {} // tslint:disable-line

export const Button = (props: Props) => {
  const { bg, children, onClick, disabled = false } = props

  return (<button
    style={{ backgroundColor: bg }}
    onClick={!disabled ? onClick : noop}
  >
    {children}
  </button>)
}

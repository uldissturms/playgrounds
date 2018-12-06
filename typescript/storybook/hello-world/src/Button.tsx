import * as React from 'react'

export interface Props {
  /** this sets the background color */
  bg: string
  /** this sets the click action */
  onClick: () => void
  /**
   * disables button
   *
   * @default false
   */
  disabled?: boolean
  /** this sets button text */
  children: React.ReactNode
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

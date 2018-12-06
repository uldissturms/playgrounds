import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from './Button'

storiesOf('button', module)
  .addWithJSX('green', withInfo(
    `consider using this as a primary button`
  )(() =>
    <Button bg='green'>Hello Green World!</Button>
  ))
  .addWithJSX('blue', () =>
    <Button bg='blue'>Hello Blue World!</Button>
  )

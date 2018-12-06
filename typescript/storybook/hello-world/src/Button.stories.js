import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('button', module)
  .addWithJSX('green', () => (
    <Button bg='green'>Hello Green World!</Button>
  ))
  .addWithJSX('blue', () => (
    <Button bg='blue'>Hello Blue World!</Button>
  ))

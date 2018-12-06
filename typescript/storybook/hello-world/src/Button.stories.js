import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button } from './Button'

storiesOf('Button', module)
  .add('green', () => (
    <Button bg='green'>Hello Green World!</Button>
  ))
  .add('blue', () => (
    <Button bg='blue'>Hello Blue World!</Button>
  ))

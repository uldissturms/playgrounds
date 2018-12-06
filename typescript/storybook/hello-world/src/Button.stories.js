import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from './Button'
import { text, color, boolean } from '@storybook/addon-knobs/react'

storiesOf('button', module)
  .addWithJSX('green', withInfo(
    `consider using this as a primary button`
  )(() =>
    <Button bg='green'>Hello Green World!</Button>
  ))
  .addWithJSX('blue', () =>
    <Button bg='blue'>Hello Blue World!</Button>
  )
  .addWithJSX('multi-props', withInfo()(() =>
    <Button
      disabled={boolean('disabled', false)}
      bg={color('background', 'yellow')}>
      {text('text', 'change me')}
    </Button>
  ))

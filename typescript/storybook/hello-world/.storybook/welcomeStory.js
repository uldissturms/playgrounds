import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('welcome', module).add(
  'hello world',
  () => (<h1>welcome to <mark><i>hello world</i></mark> storybook</h1>)
)

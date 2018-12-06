import { configure, setAddon, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)
setAddon(JSXAddon)

const req = require.context('../src', true, /.stories.js$/)

const loadStories = () => {
  require('./welcomeStory')
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)

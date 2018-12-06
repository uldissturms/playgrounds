import { configure, setAddon } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'

setAddon(JSXAddon)

const req = require.context('../src', true, /.stories.js$/)

const loadStories = () => {
  require('./welcomeStory')
  req.keys().forEach(f => req(f))
}

configure(loadStories, module)

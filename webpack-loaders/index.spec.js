const test = require('tape')
const exec = require('child_process').exec

test('world is replaced with loaders when app is bundled', t => {
  exec('node ./bundle.js', (err, stdout) => {
    t.error(err)
    t.is(stdout, 'Hello loaders\n')
    t.end()
  })
})

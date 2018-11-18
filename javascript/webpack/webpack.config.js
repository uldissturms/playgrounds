const path = require('path')

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  devtool: 'nosources-source-map',
  entry: {
    simple: path.join(__dirname, './src/simple.js'),
    deps: path.join(__dirname, './src/deps.js'),
    modules: path.join(__dirname, './src/modules.js')
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: '[name].bundle.js'
  }
}

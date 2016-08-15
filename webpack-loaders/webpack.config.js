module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.transform$/, loader: './dummy-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}

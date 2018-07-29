const HtmlWepackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWepackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

module.exports = {
  module: {
    rules: [ {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    } ]
  },
  resolve: { extensions: ['*', '.jsx', '.js'] },
  plugins: [ htmlPlugin ]
}

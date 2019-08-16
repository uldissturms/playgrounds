const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (async () => {
  return {
    entry: slsw.lib.entries,
    target: 'node',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          ],
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      measureCompilationTime: true,
      memoryLimit: 4096
    })],
    externals: [nodeExternals()]
  };
})();

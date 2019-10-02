const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src'),
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts'],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: 'index.js',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    projectReferences: true,
                },
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    node: {
        __dirname: false,
    }
}

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|mp3|ttf|woff2?)$/i,
                loader: 'file-loader',
                options: {
                    name: 'assets/files/[name].[ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
    },
};
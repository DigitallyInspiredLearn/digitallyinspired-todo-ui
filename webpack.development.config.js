const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
        'webpack-hot-middleware/client?reload=true',
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {limit: 8192 },
                }]
            },
        ],
    },
plugins: [
    new HtmlWebpackPlugin({
        template: './assets/index.html',
        inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
],
    resolve
:
{
    extensions: ['.js', '.jsx'],
}
,
}
;

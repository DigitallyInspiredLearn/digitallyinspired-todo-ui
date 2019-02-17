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
<<<<<<< HEAD
                test: /\.(png|jpg|svg|gif|PNG)$/,
=======
                test: /\.(png|jpg|gif|PNG|svg)$/,
>>>>>>> b35abe32cd2de24c8428c35d7172655a2e585cd0
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
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
    resolve:
        {
            extensions: ['.js', '.jsx'],
        }
    ,
};

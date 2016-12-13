const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugIn = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: '../server/public',
        filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugIn('styles.css')
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugIn.extract('style-loader', 'css-loader')
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }
        ]
    }

};

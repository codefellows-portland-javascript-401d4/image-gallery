const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'main.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin('main.css')
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
            loader:'babel-loader',
            query: {
                cacheDirectory: true,
                // plugins: ['transform-runtime']    
            } 
        }, {
            test: /\.scss$/,
            // loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap')
            loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!sass?sourceMap')
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    sassLoader: {
        includePaths: ['./src/scss/partials']
    }
};



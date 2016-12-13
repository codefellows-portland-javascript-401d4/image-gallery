const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: '../server/build',
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
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                // presets: ['es2015']
            }
        },     {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                'css-loader?sourceMap!sass-loader?sourceMap'
            )    
    }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    sassLoader: {
        includePaths: ['src/scss/partials']
    }
};
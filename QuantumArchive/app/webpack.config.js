const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

const cssExtract = new ExtractTextPlugin('main.css');

module.exports = {
    entry: './src/main.js',
    output: {
        path: '../server/public',
        // path: './build',
        filename: 'main.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        cssExtract
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
                // presets: ['es2015'],
                cacheDirectory: true,
                // plugins: ['transform-runtime']
            }
        }, {
            // test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            test: /\.scss$/,
            loader:	cssExtract.extract(
                'style-loader', 
                'css-loader?sourceMap!sass-loader?sourceMap'
            )
        }, {
            test: /\.html$/,
            loader: 'html-loader'	
        }]
    },
    sassLoader: {
        includePaths: ['./src/scss/partials']
    }
};
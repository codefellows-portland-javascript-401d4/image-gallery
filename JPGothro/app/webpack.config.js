const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugIn = require('extract-text-webpack-plugin');

var cssExtract = new ExtractTextPlugIn('styles.css');

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
                cacheDirectory: true,
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loader: cssExtract.extract(
                'style-loader', 
                'css-loader?sourceMap!sass-loader?sourceMap')
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }
        ]
    },
    sassLoader: {
        includePaths: ['./src/scss/partials']
    }

};

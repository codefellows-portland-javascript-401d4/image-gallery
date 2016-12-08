const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: './src/app.js',
  output: {
    path: '../server/public',
    filename: 'build.js'
  }, 

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }), 
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    preLoaders: [{
      test: /\.js$/, // all files ending in .js
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      exclude:/node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'] //,
        // cacheDirectory: true,
        // plugins: ['transform-runtime']
      } 

    }, 
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, 
    {
      test: /\.html/,
      loader: 'html-loader'
    }
    ]
  }
};
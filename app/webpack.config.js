const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: '../server/public/',
		filename: 'main.js'
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin('main.scss')
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
		},  {	
			test: /\.scss$/,
			loader: 'style-loader!cssloader?sourceMap!sass-loader?sourceMap'
		}, {
			test: /\.html$/,
			loader: 'html-loader'	
		}]
	},
	sassloader:{
		includePaths: ['./src/scss/partials']
	}
};

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {

	entry: {
	 	index: ['./src/js/entry.js'],
	 	util: ['./src/js/util-sync.js']
	},
	output: {
		path: path.resolve(__dirname, './dist/static'),
		publicPath: 'static/',
		filename: '[name].[chunkhash].js'
	},
	resolve: {
		extensions: ['', '.js', '.css', '.html']
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	plugins: [

		new webpack.optimize.CommonsChunkPlugin('common.js'),
                                               
		new HtmlWebpackPlugin({
			chunks: ['common.js', 'util', 'index'], 
			filename: '../index.html', 
			template: './src/tpl/index.html',
			inject: true
		})
	]
}

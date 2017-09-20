const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CLeanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/index.js',
		print: './src/js/print.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '/dist'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CLeanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			title: 'Output Management'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					'file-loader'
				]
			}
		]
	}
}

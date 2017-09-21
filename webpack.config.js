const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CLeanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/js/index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '/dist',
		hot: true
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	plugins: [
		new CLeanWebpackPlugin(['dist']),
		new HTMLWebpackPlugin({
			title: 'Output Management'
		}),
		new webpack.HotModuleReplacementPlugin()
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

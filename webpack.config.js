const webpack = require( "webpack" )
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require( "path" )

/*
		new HtmlWebpackPlugin({
			title: 'CV - Hot Module Replacement'
		}),
*/

let config = {
	mode: "development",
	entry: [ "./cv-yannick-le-tallec.js" ],
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		index: './index.html',
		overlay: {
			errors: true,
			warning: true
		},
		port: 1977
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		path: path.resolve( __dirname, './dist' ),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [ 'file-loader' ]
			},{
				test: /\.html$/,
				use: [ 'html-loader' ]
			}
		]
	}
}

module.exports = config

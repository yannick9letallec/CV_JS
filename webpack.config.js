const webpack = require( "webpack" )
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require( "path" )

let config = {
	mode: "development",
	entry: [ "./cv-yannick-le-tallec.js" ],
	devtool: 'inline-source-map',
	devServer: {
		hot: true,
		compress: true,
		index: './index.html',
		overlay: {
			errors: true,
			warning: true
		},
		host: '0.0.0.0',
		useLocalIp: true,
		watchContentBase: true,
		port: 1977
	},
	plugins: [
		new HtmlWebpackPlugin({

		}),
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
	},
	watch: true,
	watchOptions: {
		ignored: '/node_modules'
	}
}

module.exports = config

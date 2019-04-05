const webpack = require( "webpack" )
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { WebpackPluginServe: Serve } = require( 'webpack-plugin-serve' )
const path = require( "path" )

let config = {
	mode: "development",
	entry: [ "./cv-yannick-le-tallec.js",
		"webpack-plugin-serve/client"
	],
	output: {
		path: path.resolve( __dirname, './dist' ),
		filename: "bundle.js"
	},
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
		new Serve({
			port: 1978,
			hmr: true,
			liveReload: true
		}),
		new HtmlWebpackPlugin({
			title: 'CV - YLT',
			template: 'index.html'
		}),
		new CleanWebpackPlugin()
	],
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

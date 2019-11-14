const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
module.exports = function(options) {
	return {
		...options,
		entry: ['webpack/hot/poll?100', './src/main.ts'],
		watch: true,
		externals: [
			nodeExternals({
				whitelist: ['webpack/hot/poll?100'],
			}),
		],
		module: {
			rules: [
				{
					test: /.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		mode: 'development',
		resolve: {
			alias: {
				'@auth': path.resolve(__dirname, './src/auth'),
				'@common': path.resolve(__dirname, './src/common'),
				'@config': path.resolve(__dirname, './src/config'),
				'@environments': path.resolve(__dirname, './src/environments'),
				'@models': path.resolve(__dirname, './src/models'),
				'@shared': path.resolve(__dirname, './src/shared'),
				'@utils': path.resolve(__dirname, './src/utils'),
				'@validations': path.resolve(__dirname, './src/validations'),
			},
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [new webpack.HotModuleReplacementPlugin()],
		output: {
      // pathinfo: false
			path: path.join(__dirname, 'dist'),
			filename: 'server.js',
		},
	}
}

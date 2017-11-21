const path = require('path');

module.exports = {
	entry: {
		index: './src/js/index.js',
		test: './src/js/test.js'
	},
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				exclude: /node_modules/,
				test: /\.js[x]?$/,
				query: {
					cacheDirectory: true,
					presets: ['react', 'es2015']
				}
			}
		]
	}
};

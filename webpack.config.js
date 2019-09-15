const path = require('path');

module.exports = {
	entry: {
		app: './src/index.jsx'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'js'),
		publicPath: '/js'
	},
	devtool: '#sourcemap',
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			}
		]
	},
	devServer: {
		overlay: true
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.scss', '.css']
	}
};

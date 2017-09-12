const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				include: path.resolve(__dirname, '../')
			}
		],
		rules: [
			{
				test: /\.scss$/,
				loaders: ["style-loader", "css-loader", "sass-loader"],
				include: path.resolve(__dirname, '../')
			}
		]
	}
};

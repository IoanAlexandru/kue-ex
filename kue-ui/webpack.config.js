module.exports = {
	entry: ["bootstrap-webpack/bootstrap.config.js", './src/index.js'],
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
		    {
		      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
		      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
	        }			
		]
	}
}
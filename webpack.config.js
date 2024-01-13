const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		// port: 4500,
		// open: true,
		hot: true,
		static: {
			directory: './dist',
			watch: true
		}
	}
}
const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'eval-source-map',
	output: {
		filename: 'bundle.js',
	},

	resolve: {
		alias: {
			handlebars: 'handlebars/dist/handlebars.min.js'
		}
	}
};
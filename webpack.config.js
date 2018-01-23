const path = require('path');

module.exports = {
	entry: {
		main:'./src/index.js',
		test:['./src/1.js','./src/2.js']
	},
	devtool: 'eval-source-map',
	output: {
		filename: '[name].bundle.js',
	},

	resolve: {
		alias: {
			handlebars: 'handlebars/dist/handlebars.min.js'
		}
	}
};
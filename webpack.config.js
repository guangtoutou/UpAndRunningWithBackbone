const webpack = require('webpack'); //to access built-in plugins
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
	},
	plugins:[new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		_: 'underscore',
		Backbone: 'backbone'
	})]
};
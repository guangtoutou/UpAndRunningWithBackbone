import Handlebars from 'handlebars'

var MenuItemDetails = Backbone.View.extend({
	initialize: function(options){
		this.options = options || {};
	},

	template: Handlebars.compile(
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="lable">{{category}}</span></p>' +
		'<img src="{{imagepath}}" class="img-preload" />' +
		'</div>'
	),

	render: function(){

		this.$el.html(this.template(this.options));
		return this; 
	}
});

export default MenuItemDetails;
import Handlebars from 'handlebars'



var MenuItemDetails = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: Handlebars.compile(
		'<div>' +
		'<h1>{{name}}</h1>' +
		'<p><span class="label">{{category}}</span></p>' +
		'<img src="{{imagepath}}" class="img-polaroid" />' +
		'</div>'
	),

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this; 
	}
});

export default MenuItemDetails;
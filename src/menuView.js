import Handlebars from 'handlebars'



var MenuView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	
	template: Handlebars.compile(
		'<ul>' +
		'{{#each items}}<li>{{this}}</li>{{/each}}' +
		'</ul>'
	),

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this; 
	}
});

export default MenuView;
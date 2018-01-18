import Handlebars from 'handlebars'



var MenuView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection,"reset", this.render);
	},

	template: Handlebars.compile(
		'<ul>' +
		'{{#each models}}<li>{{attributes.url}}</li>{{/each}}' +
		'</ul>'
	),

	render: function(){
		this.$el.html(this.template(this.collection));
		return this; 
	}
});

export default MenuView;
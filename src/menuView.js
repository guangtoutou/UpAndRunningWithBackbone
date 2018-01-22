var MenuView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection,"reset", this.render);
	},

	template: _.template($('#menu-template').html()),

	render: function(){
		console.log(app.menuItems);
		this.$el.html(this.template(this.collection));
		return this; 
	}
});

module.exports = MenuView;
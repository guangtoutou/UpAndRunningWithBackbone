import Handlebars from 'handlebars'



var MenuItemDetails = Backbone.View.extend({
	initialize: function(){
		this.render();
	},


	render: function(){

		this.$el.html(this.model.get('category'));
		return this; 
	}
});

export default MenuItemDetails;
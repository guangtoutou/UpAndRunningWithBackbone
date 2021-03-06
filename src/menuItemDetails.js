import {app} from './global.js';

var MenuItemDetails = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	template: _.template($('#menuItem-template').html()),

	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this; 
	}
});

export default MenuItemDetails;
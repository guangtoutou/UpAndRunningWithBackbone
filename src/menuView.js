import _ from 'underscore';
import $ from 'jquery';

var MenuView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection,"reset", this.render);
	},

	template: _.template($('#menu-template').html()),

	render: function(){
		this.$el.html(this.template(this.collection));
		return this; 
	}
});

export default MenuView;
import _ from 'underscore';
import $ from 'jquery';

var MenuItemFormView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},

	template: _.template($('#menuItemForm-template').html()),

	events:{
		'click .btn-primary': 'setModelData'
	},

	setModelData: function(){
		console.log(this.$el.find('input[name="name"]').val());
		var a = {
			name:this.$el.find('input[name="name"]').val(),
			category:this.$el.find('input[name="category"]').val(),
			url:this.$el.find('input[name="url"]').val(),
			imagepath:this.$el.find('input[name="imagepath"]').val()
		};
		console.log(a);
		//this.collection.add(this.model);
		Backbone.history.navigate('menu-items/'+ a.url, {trigger: true});
	},

	render: function(){
		this.$el.html(this.template());
		return this; 
	}
});

export default MenuItemFormView;
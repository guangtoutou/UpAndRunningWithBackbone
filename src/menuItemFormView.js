import {app} from './global.js';

var MenuItemFormView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},

	template: _.template($('#menuItemForm-template').html()),

	events:{
		'click .btn-primary': 'setModelData',
		'click .btn-danger': function(){Backbone.history.navigate('', {trigger: true});}
	},

	setModelData: function(){

		var a = {
			id:this.$el.find('input[name="id"]').val(),
			name:this.$el.find('input[name="name"]').val(),
			category:this.$el.find('input[name="category"]').val(),
			url:this.$el.find('input[name="url"]').val(),
			imagepath:this.$el.find('input[name="imagepath"]').val()
		};
		console.log(a.url);
		this.collection.add(a);
		console.log(this.collection);
		Backbone.history.navigate('menu-items/'+ a.id, {trigger: true});
	},

	render: function(){
		this.$el.html(this.template());
		return this; 
	}
});

export default MenuItemFormView;
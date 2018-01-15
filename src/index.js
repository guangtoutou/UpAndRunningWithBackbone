import $ from 'jquery';
import Backbone from 'backbone';
import MenuItemDetails from './menuItemDetails.js';

var Menu = Backbone.Model.extend({
	defaults:{
		name:'',
		category: 'entry',
		imagepath: './img/salad.jpg'
	}
});

var AppRouter = Backbone.Router.extend({
	routes:{
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails"
	},

	list: function(){
		$('#app').html('List Screen');
	},

	itemForm: function(){
		$('#app').html('New item form');
	},

	itemDetails: function(item){
		var menu = new Menu();
		var menuItemView = new MenuItemDetails(
			{
				model: menu
			}
		);
		menuItemView.model.set({category:item});
		$('#app').html(menuItemView.render().el);
	}
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
})
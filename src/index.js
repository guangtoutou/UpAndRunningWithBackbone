import $ from 'jquery';
import Backbone from 'backbone';
import MenuItemDetails from './menuItemDetails.js';



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
		var view = new MenuItemDetails(
			{
				name: item,
				category: 'entry',
				imagepath: './img/salad.jpg'
			}
		);

		$('#app').html(view.render().el);
	}
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
})
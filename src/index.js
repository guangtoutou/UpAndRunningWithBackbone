import $ from 'jquery';
import Backbone from 'backbone';
import MenuItemDetails from './menuItemDetails.js';
import MenuView from './menuView.js';

var MenuItem = Backbone.Model.extend({
	defaults:{
		name:'',
		category: 'entry',
		imagepath: './img/salad.jpg'
	}
});

var Menu = Backbone.Model.extend({
	defaults:{
		items: ['Garden Salad','Pizza','Cheesecake']
	}
});

var AppRouter = Backbone.Router.extend({
	routes:{
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails"
	},

	initialize: function(){
		var menuItem = new MenuItem(); 
		this.menuItemView = new MenuItemDetails({model: menuItem});

		var menu = new Menu();
		this.menuView = new MenuView({
			model:menu
		});

	},

	list: function(){
		$('#app').html(this.menuView.render().el);
	},

	itemForm: function(){
		$('#app').html('New item form');
	},

	itemDetails: function(item){

		this.menuItemView.model.set({category:item});
		$('#app').html(this.menuItemView.render().el);
	}
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
})
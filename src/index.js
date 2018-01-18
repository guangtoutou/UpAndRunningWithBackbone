import $ from 'jquery';
import Backbone from 'backbone';
import MenuItemDetails from './menuItemDetails.js';
import MenuView from './menuView.js';

var MenuItem = Backbone.Model.extend({

	defaults:{
		id:'',
		url:'',
		name:'',
		category: 'entry',
		imagepath: './img/salad.jpg'
	}
});

var MenuItems = Backbone.Collection.extend({
	model: MenuItem,
	url:'/item.json'
});

var Menu = Backbone.Model.extend({

});

var AppRouter = Backbone.Router.extend({
	routes:{
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails"
	},

	initialize: function(){
		this.menuItems = new MenuItems();
		this.menuItems.fetch();


		this.menuItem = new MenuItem(); 
		this.menuItemView = new MenuItemDetails({model: this.menuItem});


		this.menuView = new MenuView({collection:this.menuItems});
	},

	list: function(){
		$('#app').html(this.menuView.render().el);
	},

	itemForm: function(){
		$('#app').html('New item form');
	},

	itemDetails: function(item){

		$('#app').html(this.menuItemView.render().el);
	}
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
})
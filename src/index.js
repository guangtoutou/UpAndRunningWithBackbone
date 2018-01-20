import $ from 'jquery';
import Backbone from 'backbone';
import MenuItemDetails from './menuItemDetails.js';
import MenuView from './menuView.js';
import MenuItemFormView from './menuItemFormView.js';

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

var App = Backbone.Router.extend({
	routes:{
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
		"order/:item":"orderItems"
	},

	initialize: function(){
		this.menuItems = new MenuItems();
		this.menuItems.fetch();


		this.menuItem = new MenuItem(); 
		this.menuItemView = new MenuItemDetails({model: this.menuItem});

		this.menuView = new MenuView({collection:this.menuItems});

		this.menuItemFormView = new MenuItemFormView({collection:this.menuItems});
	},

	list: function(){
		$('#app').html(this.menuView.render().el);
	},

	itemForm: function(){
		$('#app').html(this.menuItemFormView.render().el);
	},

	itemDetails: function(item){
		this.menuItemView.model = this.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	},

	orderItems: function(item){
		this.menuItemView.model = this.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	}
});

var app = new App();

$(function(){
	Backbone.history.start();
})
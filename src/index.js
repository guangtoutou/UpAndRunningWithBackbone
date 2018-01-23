import {app} from './global';
import MenuView from './menuView.js';
import MenuItemDetails from'./menuItemDetails.js';
import MenuItemFormView from'./menuItemFormView.js';

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

app.AppRouter = Backbone.Router.extend({
	routes:{
		"": "list",
		"menu-items/new": "itemForm",
		"menu-items/:item": "itemDetails",
		"order/:item":"orderItems"
	},

	initialize: function(){
		app.menuItems = new MenuItems();
		app.menuItems.fetch();

		this.menuItem = new MenuItem(); 
		this.menuItemView = new MenuItemDetails({model: this.menuItem});

		this.menuView = new MenuView();	
	},

	list: function(){
		$('#app').html(this.menuView.render().el);
	},

	itemForm: function(){
		var menuItemFormView = new MenuItemFormView({collection: app.menuItems});
		$('#app').html(menuItemFormView.render().el);
	},

	itemDetails: function(item){
		this.menuItemView.model = app.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	},

	orderItems: function(item){
		this.menuItemView.model = this.menuItems.get(item);
		$('#app').html(this.menuItemView.render().el);
	}
});

var appRouter = new app.AppRouter();


$(function(){
	Backbone.history.start();
})
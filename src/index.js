import $ from 'jquery'
import Backbone from 'backbone'


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
		$('#app').html('Menu item:' + item);
	}
});

var app = new AppRouter();

$(function(){
	Backbone.history.start();
})
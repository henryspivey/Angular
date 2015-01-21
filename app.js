var app = angular.module("gemStore", [])

(function () {
	var gem = {
		name:"Azurite", 
		price: 2.95
		canPurchase: false,
	    soldOut: true
	};
	var app = angular.module('gemStore', []);
	app.controller("StoreController", function(){
		this.product = gem;
	});
})();
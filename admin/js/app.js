'use strict';
var ApplicationModuleName = 'BusinessApp';

var SampleApplicationModule = angular.module('BusinessApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'ngMessages',
    'angular-storage',
    'ngTagsInput',
    'ngSanitize', 
    'textAngular'
]);

SampleApplicationModule.config(['$routeProvider','storeProvider', function ($routeProvider,storeProvider) {

	$routeProvider.otherwise({redirectTo: '/adminlogin'});

	$routeProvider
	.when('/adminlogin', {
		templateUrl: 'partials/adminlogin.html',
		controller : 'CategoryController'
	})

	.when('/productmanagement', {
		templateUrl: 'partials/productmanagement.html',
		controller : 'CategoryController'
	})

	.when('/buyer_seller_list', {	
		templateUrl: 'partials/buyer_seller_list.html',
		controller : 'CategoryController'
	})
	.when('/userlist', {
		templateUrl: 'partials/userlist.html',
		controller: 'CategoryController'
	})

	.when('/add_category', {
		templateUrl: 'partials/add_category.html',
		controller : 'CategoryController'
	})

	.when('/edit_category/:id', {
		templateUrl: 'partials/edit_category.html',
		controller: 'CategoryController'
	})

	.when('/view_category/:id', {
		templateUrl: 'partials/view_category.html',
		controller : 'CategoryController'
	})

  // items
}]);

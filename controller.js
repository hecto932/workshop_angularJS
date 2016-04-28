var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'page.html'
		})
		.when('/login', {
			templateUrl: 'login.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});
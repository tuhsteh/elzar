'use strict';

angular
    .module('elzarApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/', {
                templateUrl: 'views/recipes.html',
                controller: 'RecipeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

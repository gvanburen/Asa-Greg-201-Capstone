'use strict';

angular.module('textAnalysis', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: './components/home/home.view.html',
                controller: 'homeCtrl'
            })
            .when('/tweets/:handle', {
                templateUrl: './components/tweets/tweets.view.html', 
                controller: 'tweetCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

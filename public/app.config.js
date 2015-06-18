'use strict';

angular.module('textAnalysis', ['ngRoute', 'd3'])
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
            .when('/results/:handle/:id', {
                templateUrl: './components/results/results.view.html',
                controller: 'resultsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

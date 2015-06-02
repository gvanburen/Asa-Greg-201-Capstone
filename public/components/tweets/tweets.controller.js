'use strict';

angular.module('textAnalysis')
	.config(function($httpProvider){
		$httpProvider.defaults.useXDomain = true;
		$httpProvider.defaults.withCredentials = true;
		delete $httpProvider.defaults.headers.common["X-Requested-With"];
		$httpProvider.defaults.headers.common["Accept"] = "application/json";
		$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
	})
	.controller('tweetCtrl', ['$routeParams','$scope', '$http', 'twitterService', 
		function($routeParams, $scope, $http, twitterService) {
			
			$scope.twitterHandle = $routeParams.handle;
			
			$scope.tweets = ['first', 'second', 'third', 'fourth'];

			//need to figure out how to get with authorization
			//or use the node.js SDK 
			$scope.analyze = function(text){
				// application_id: "3b3a6ee8",
				// application_key: "c20b9d30b75765b73f3012dcd6fca5e2",
				var url = "http://api.aylien.com/api/v1/sentiment?text=" + text;
				$http({
					method: "JSONP",
					url: url,
					callback: "JSON_CALLBACK",
					headers: {
						'Authorization': '3b3a6ee8:c20b9d30b75765b73f3012dcd6fca5e2',
					}
				});
				console.log(text);
			};
		}
	]);
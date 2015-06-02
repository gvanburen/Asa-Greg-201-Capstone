'use strict';

angular.module('textAnalysis')
	.config(function($httpProvider) {
  		$httpProvider.defaults.useXDomain = true;
  		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
	})
	.controller('tweetCtrl', ['$rootScope', '$scope', '$http', 'twitterService', 
		function($rootScope, $scope, $http, twitterService) {
			
			$scope.userInput = $rootScope.userInput;
			
			$scope.tweets = ['first', 'second', 'third', 'fourth'];

			//need to figure out how to get with authorization
			//or use the node.js SDK 
			$scope.analyze = function(text){
				var request = {
					text: text,
					application_id: "3b3a6ee8",
					application_key: "c20b9d30b75765b73f3012dcd6fca5e2",
					callback: "jsonp"
				};
				var url = "http://api.aylien.com/api/v1/sentiment?";
				$http({
					method: "GET",
					url: url,
					headers: {
						'Accept': 'application/json',
					},
					params: request
				});
				console.log(text);
			};
		}
	]);
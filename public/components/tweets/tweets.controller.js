'use strict';

angular.module('textAnalysis')
	.controller('tweetCtrl', ['$routeParams','$scope', '$http', 'twitterService', 
		function($routeParams, $scope, $http, twitterService) {
			$scope.loadingTweets = true;

			$scope.twitterHandle = $routeParams.handle;
			
			$scope.tweets = ['first', 'second', 'third', 'fourth'];

			/*need to troubleshoot authorization issues
			or use the node SDK*/ 
			// $scope.analyze = function(text){
			// 	// application_id: "3b3a6ee8",
			// 	// application_key: "c20b9d30b75765b73f3012dcd6fca5e2",
			// 	var url = "http://api.aylien.com/api/v1/sentiment?text=" + text;
			// 	$http({
			// 		method: "GET",
			// 		url: url
			// 	});
			// };
		}
	]);
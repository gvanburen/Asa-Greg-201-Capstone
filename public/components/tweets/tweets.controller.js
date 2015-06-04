'use strict';

angular.module('textAnalysis')
	.controller('tweetCtrl', ['$routeParams','$scope', 'twitterService', 
		function($routeParams, $scope, twitterService) {
			//sets the twitter handle display to be equal to the url handle

            $scope.twitterHandle = $routeParams.handle;

            //show loading animation until data from twitter is populated

            $scope.loadingTweets = true;

            //get sentiment data about text via ng-click, 
            //sending text to the aylien endpoint

            $scope.getSentiment = twitterService.getSentiment;

            //display sentiment data after returned to an object 
            //in the twitterService

            $scope.sentimentData = twitterService.sentimentData;

            //load tweets after passing the desired screen_name
            //to the twitterService and then to the twitter endpoint.

            twitterService.loadTweets($routeParams.handle)
                .then(function(data) {
                    console.log(data);
                    //store return data in Scope.tweets
                    $scope.tweets = data;

                    //turn off loading animation
                    $scope.loadingTweets = false;
                });
        }
	]);
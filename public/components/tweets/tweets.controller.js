'use strict';

angular.module('textAnalysis')
    .controller('tweetCtrl', ['$scope', 'twitterService', '$routeParams',
        function($scope, twitterService, $routeParams) {

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
                    
                    //store return data in Scope.tweets
                    $scope.tweets = data;

                    //turn off loading animation
                    $scope.loadingTweets = false;
                });
        }
    ]);

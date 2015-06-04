'use strict';

angular.module('textAnalysis')
    .controller('tweetCtrl', ['$routeParams', '$scope', '$location', 'twitterService',
        function($routeParams, $scope, $location, twitterService) {
            //sets the twitter handle display to be equal to the url handle

            $scope.twitterHandle = $routeParams.handle;

            //show loading animation until data from twitter is populated

            $scope.loadingTweets = true;

            /* get sentiment data about text via ng-click, 
            sending text to the aylien endpoint */

            $scope.loadResults = function(tweetText) {
                twitterService.resultsTweet = tweetText;
                console.log(twitterService.resultsTweet);
                $location.path('/results/' + $routeParams.handle);
            };

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

            //format the time as Month, Day, Year

            $scope.correctTime = function(string) {
                return new Date(Date.parse(string));
            };
        }
    ]);

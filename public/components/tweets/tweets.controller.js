'use strict';

angular.module('textAnalysis')
    .controller('tweetCtrl', ['$routeParams', '$scope', '$log', '$location', 'twitterService',
        function($routeParams, $scope, $log, $location, twitterService) {

            //show loading animation until data from twitter is populated

            $scope.loadingTweets = true;

            /* get analysis data about text via ng-click, 
            changing location to /results/ where aylien endpoint is called */

            $scope.loadResults = function(tweetText) {
                twitterService.resultsTweet = tweetText;
                $location.path('/results/' + $routeParams.handle);
            };

            //load tweets after passing the desired screen_name
            //to the twitterService and then to the twitter endpoint.

            twitterService.loadTweets($routeParams.handle)
                .then(function(data) {
                    $log.log(data);
                    $scope.twitterHandle = data[0].user.screen_name;
                    //store return data in Scope.tweets
                    var cloudArray = [];
                    $scope.tweets = data;
                    angular.forEach($scope.tweets, function(tweet, index) {
                        cloudArray.push(tweet.text);
                    });
                    var cloud = cloudArray.join("");
                    var cloudString = cloud.replace(/@_&,+(?=\.)/g, " ");
                    $scope.words = cloudString.match(/\S+/g);
                    //turn off loading animation
                    $scope.loadingTweets = false;
                });

            //format the time as Month, Day, Year

            $scope.correctTime = function(string) {
                return new Date(Date.parse(string));
            };
        }
    ]);

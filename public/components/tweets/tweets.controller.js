'use strict';

angular.module('textAnalysis')
    .controller('tweetCtrl', ['$scope', 'twitterService', '$routeParams',
        function($scope, twitterService, $routeParams) {
            $scope.loadingTweets = true;

            twitterService.loadTweets($routeParams.handle)
                .then(function(data) {
                    $scope.tweets = data;
                    $scope.loadingTweets = false;
                });
        }
    ]);

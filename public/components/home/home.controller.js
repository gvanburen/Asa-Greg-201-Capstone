'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$scope', '$http', '$anchorScroll', '$location', 'twitterService',
        function($scope, $http, $anchorScroll, $location, twitterService) {

            $scope.loadingTweets = false;

            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.userInput = {};

            $scope.loadTweets = function() {
                $scope.loadingTweets = true;
                twitterService.loadTweets($scope.userInput.text)
                    .then(function(data) {
                        $scope.loadingTweets = false;
                        $location.path('/tweets');
                    });
            };
        }
    ]);

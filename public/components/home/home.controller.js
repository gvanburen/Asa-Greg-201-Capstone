'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$scope', '$http', '$anchorScroll', '$location',
        function($scope, $http, $anchorScroll, $route, $location) {

            $scope.loadingTweets = false;

            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.userInput = {};

            $scope.loadTweets = function() {
                if ($scope.submitHandle.userInput.$valid) {
                    $scope.loadingTweets = true;
                    $location.path('/tweets/' + $scope.userInput.text);
                    //twitterService.loadTweets($scope.userInput.text)
                    //    .then(function(data) {
                    //        $scope.loadingTweets = false;
                    //        $location.path('/tweets');
                    //    });
                }
            };
        }
    ]);

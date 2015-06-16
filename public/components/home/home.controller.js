'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$scope', '$anchorScroll', '$location',
        function($scope, $anchorScroll, $location) {

            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.showSideNav = function() {
                console.log($scope.userInput);
                console.log($scope.submitHandle.userInput);
                $('.button-collapse').sideNav({
                    closeOnClick: true
                });
            };

            $scope.userInput = {
                timeline: 'user'
            };

            $scope.loadTweets = function() {
                if ($scope.submitHandle.userInput.$valid) {
                    $location.path('/tweets/' +
                        $scope.userInput.text).search({
                        timeline: $scope.userInput.timeline
                    });
                }
            };
        }
    ]);

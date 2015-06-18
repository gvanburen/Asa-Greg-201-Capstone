'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$scope', '$anchorScroll', '$location', '$log',
        function($scope, $anchorScroll, $location, $log) {

            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.showSideNav = function() {
                $log.log($scope.userInput);
                $log.log($scope.submitHandle.userInput);
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

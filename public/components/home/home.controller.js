'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$scope', '$anchorScroll', '$location',
        function($scope, $anchorScroll, $location) {

            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
                console.log($location);
            };

            $scope.showSideNav = function() {
                $('.button-collapse').sideNav({
                    closeOnClick: true
                });
            };

            $scope.userInput = {};

            $scope.loadTweets = function() {
                if ($scope.submitHandle.userInput.$valid) {
                    $location.path('/tweets/' + $scope.userInput.text);
                }
            };
        }   
    ]);

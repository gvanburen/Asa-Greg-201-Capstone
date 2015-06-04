'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$scope', '$http', '$anchorScroll', '$location',
        function($scope, $http, $anchorScroll, $location) {
            
            $scope.scrollTo = function(id) {
                $location.hash(id);
                $anchorScroll();
            };

            $scope.showSideNav = function(){
                $('.button-collapse').sideNav({
                    closeOnClick: true
                });
            }

            $scope.userInput = {};

            $scope.loadTweets = function() {
                if ($scope.submitHandle.userInput.$valid) {
                    $location.path('/tweets/' + $scope.userInput.text);
                }
            };
        }
    ]);

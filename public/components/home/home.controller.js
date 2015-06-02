'use strict';

angular.module('textAnalysis')
    .controller('homeCtrl', ['$rootScope', '$scope', '$http', '$anchorScroll', '$location',
        function($rootScope, $scope, $http, $anchorScroll, $location) {

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
                    $rootScope.userInput = $scope.userInput;
                }
            };
        }
    ]);

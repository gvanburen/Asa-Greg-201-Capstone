'use strict';

angular.module('textAnalysis')
    .controller('resultsCtrl', ['$scope', '$log', 'twitterService', 'aylienService',
        function($scope, $log, twitterService, aylienService) {
            $scope.collapse = function(){
                $('.collapsible').collapsible({
                    accordian: false
                });
            };
            $scope.loadingSentiment = true;
            $scope.loadingHashtags = true;
            $scope.loadingEntities = true;
            $scope.loadingClasses = true;
            $scope.loadingConcepts = true;

            //return from sentiment endpoint...
            //can display text of tweet using data from this endpoint

            aylienService.getSentiment(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.tweets
                    $scope.sentiment = data;
                    $log.log($scope.sentiment);
                    //turn off loading animation
                    $scope.loadingSentiment = false;
                });

            //hashtags

            aylienService.getHashtags(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.hashtags
                    $scope.hashtags = data.hashtags;
                    $log.log($scope.hashtags);
                    //turn off loading animation
                    $scope.loadingHashtags = false;
                });

            //entities

            aylienService.getEntities(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.entities
                    $scope.entities = data.entities;
                    $log.log($scope.entities);
                    //turn off loading animation
                    $scope.loadingEntities = false;
                });

            //classes

            aylienService.getClasses(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.categories
                    $scope.categories = data.categories;
                    $log.log($scope.categories);
                    //turn off loading animation
                    $scope.loadingClasses = false;
                });

            //concepts

            aylienService.getConcepts(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.concepts
                    $scope.concepts = data.concepts;
                    $scope.myLength = $scope.concepts.length;
                    $log.log($scope.concepts);
                    $log.log($scope.myLength);
                    //turn off loading animation
                    $scope.loadingConcepts = false;
                });
        }
    ]);

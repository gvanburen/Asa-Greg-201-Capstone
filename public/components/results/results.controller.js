'use strict';

angular.module('textAnalysis')
    .controller('resultsCtrl', ['$scope', 'twitterService', 'aylienService',
        function($scope, twitterService, aylienService) {

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
                    //turn off loading animation
                    $scope.loadingSentiment = false;
                });

            //hashtags

            aylienService.getHashtags(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.hashtags
                    $scope.hashtags = data.hashtags;
                    //turn off loading animation
                    $scope.loadingHashtags = false;
                });

            //entities

            aylienService.getEntities(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.entities
                    $scope.classes = data.entities;
                    //turn off loading animation
                    $scope.loadingEntities = false;
                });

            //classes

            aylienService.getClasses(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.categories
                    $scope.classes = data.categories;
                    //turn off loading animation
                    $scope.loadingClasses = false;
                });

            //concepts

            aylienService.getConcepts(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.concepts
                    $scope.concepts = data.concepts;
                    //turn off loading animation
                    $scope.loadingConcepts = false;
                });
        }
    ]);

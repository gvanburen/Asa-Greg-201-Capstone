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


            $scope.words = function() {
                var tweet = twitterService.resultsTweet.match(/\S+/g);
                return tweet;
            }();

            //return from sentiment endpoint...
            //can display text of tweet using data from this endpoint

            
            aylienService.getSentiment(twitterService.resultsTweet)
                .then(function(data) {
                    //store return data in Scope.sentiment
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
                    //get the length of concepts
                    var conceptLength = Object.keys(data.concepts).length;
                    //store return data in Scope.concepts
                    $log.log(Object.keys(data.concepts).length);
                    if(conceptLength < 1){
                        $scope.concepts == null;
                    } else {
                    $scope.concepts = data.concepts;
                    }
                    $log.log(data.concepts);
                    //turn off loading animation
                    $scope.loadingConcepts = false;
                });
        }
    ]);

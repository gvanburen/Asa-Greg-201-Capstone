'use strict';

angular.module('textAnalysis')
    .controller('resultsCtrl', ['$scope', '$log', '$routeParams', 'twitterService', 'aylienService', 'storageService',
        function($scope, $log, $routeParams, twitterService, aylienService, storageService) {

            $scope.collapse = function() {
                $('.collapsible').collapsible({
                    accordian: true
                });
            };
            
            $scope.loadingSentiment = true;
            $scope.loadingHashtags = true;
            $scope.loadingEntities = true;
            $scope.loadingClasses = true;
            $scope.loadingConcepts = true;

            var init = function() {
                $scope.words = function(){
                    var tweet = twitterService.resultsTweet.match(/\S+/g);
                    storageService.setData('tweet', twitterService.resultsTweet);
                    return tweet;
                }();

                //return from sentiment endpoint...
                //can display text of tweet using data from this endpoin
                aylienService.getSentiment(twitterService.resultsTweet)
                    .then(function(data) {
                        //store return data in Scope.sentiment
                        $scope.sentiment = data;
                        //store returned data in local storage
                        storageService.setData('sentiment', JSON.stringify(data));
                        //turn off loading animation
                        $scope.loadingSentiment = false;
                    });

                //hashtags

                aylienService.getHashtags(twitterService.resultsTweet)
                    .then(function(data) {
                        //store return data in Scope.hashtags
                        $scope.hashtags = data.hashtags;
                        //store returned data in local storage
                        storageService.setData('hashtag', JSON.stringify(data.hashtags));
                        //turn off loading animation
                        $scope.loadingHashtags = false;
                    });

                //entities

                aylienService.getEntities(twitterService.resultsTweet)
                    .then(function(data) {
                        //store return data in Scope.entities
                        $scope.entities = data.entities;
                        //store returned data in local storage
                        storageService.setData('entity', JSON.stringify(data.entities));
                        //turn off loading animation
                        $scope.loadingEntities = false;
                    });

                //classes

                aylienService.getClasses(twitterService.resultsTweet)
                    .then(function(data) {
                        //store return data in Scope.categories
                        $scope.categories = data.categories;
                        //store returned data in local storage
                        storageService.setData('category', JSON.stringify(data.categories));
                        //turn off loading animation
                        $scope.loadingClasses = false;
                    });

                //concepts

                aylienService.getConcepts(twitterService.resultsTweet)
                    .then(function(data) {
                        //get the length of concepts
                        var conceptLength = Object.keys(data.concepts).length;
                        //store return data in Scope.concepts
                        if (conceptLength < 1) {
                            $scope.concepts == null;
                        } else {
                            $scope.concepts = data.concepts;
                            //store returned data in local storage
                            storageService.setData('concept', JSON.stringify(data.concepts));
                        }
                        //turn off loading animation
                        $scope.loadingConcepts = false;
                    });
            };

            var refreshed = function(){
                $scope.words = function(){
                    var tweet = twitterService.resultsTweet.match(/\S+/g);
                    return tweet;
                }();
                $scope.sentiment = JSON.parse(storageService.getData('sentiment'));
                $scope.loadingSentiment = false;
                $scope.hashtags = JSON.parse(storageService.getData('hashtag'));
                $scope.loadingHashtags = false;
                $scope.entities = JSON.parse(storageService.getData('entity'));
                $scope.loadingEntities = false;
                $scope.categories = JSON.parse(storageService.getData('category'));
                $scope.loadingClasses = false;
                $scope.concepts = JSON.parse(storageService.getData('concept'));
                $scope.loadingConcepts = false;
            };

            if (twitterService.resultsTweet == ""){
                twitterService.resultsTweet = storageService.getData('tweet');
                refreshed();
            } else {
                init();
            }
            //check this logic

            // if (twitterService.resultsTweet.length) {
            //     init();
            // } else {
            //     twitterService.getSingleTweet($routeParams.id).then(function() {
            //         init();
            //     });
            // }
        
    }]);

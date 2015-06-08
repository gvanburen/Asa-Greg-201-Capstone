'use strict';

angular.module('textAnalysis')
    .factory('aylienService', ['$q', '$http', '$routeParams',
        function($q, $http, $routeParams) {

            var aylienObj = {

                analysisData: {},

                /* encode tweets to avoid routing to embedded urls
                before submitting text of tweet to aylien endpoint */

                getSentiment: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    $http.get('/api/tweets/sentiment/' + encodedText)
                        .success(function(data) {
                            deferred.resolve(data);
                            aylienObj.analysisData.sentiment = data;
                        }).error(function(e) {
                            console.log('Error ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                getHashtags: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    $http.get('/api/tweets/hashtags/' + encodedText)
                        .success(function(data) {
                            deferred.resolve(data);
                            aylienObj.analysisData.hashtags = data;

                        }).error(function(e) {
                            console.log('Error ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                getEntities: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    $http.get('/api/tweets/entities/' + encodedText)
                        .success(function(data) {
                            deferred.resolve(data);
                            aylienObj.analysisData.entities = data;

                        }).error(function(e) {
                            console.log('Error ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },

                getClasses: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    $http.get('/api/tweets/classify/' + encodedText)
                        .success(function(data) {
                            deferred.resolve(data);
                            aylienObj.analysisData.classes = data;
                        }).error(function(e) {
                            console.log('Error ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                },
                
                getConcepts: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    $http.get('/api/tweets/concepts/' + encodedText)
                        .success(function(data) {
                            deferred.resolve(data);
                            aylienObj.analysisData.concepts = data;
                        }).error(function(e) {
                            console.log('Error ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                }
            };
            return aylienObj;
        }
    ]);

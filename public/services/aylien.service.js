'use strict';

angular.module('textAnalysis')
    .factory('aylienService', ['$q', '$http', '$routeParams',
        function($q, $http, $routeParams) {

            var aylienObj = {

                analysisData: {},

                /* encode tweets to avoid routing to embedded urls
                before submitting text of tweet to aylien endpoint */

                getSentiment: function(text) {
                    if (!angular.isDefined(aylienObj.analysisData[$routeParams.handle])) {
                        aylienObj.analysisData[$routeParams.handle] = {
                            sentiment: {},
                            hashtags: {},
                            entities: {},
                            classe: {},
                            concepts: {}
                        };
                    }
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    if (angular.isDefined(aylienObj.analysisData[$routeParams.handle])) {
                        deferred.resolve(aylienObj.analysisData[$routeParams.handle].sentiment);
                    } else {
                        $http.get('/api/tweets/sentiment/' + encodedText)
                            .success(function(data) {
                                deferred.resolve(data);
                                aylienObj.analysisData[$routeParams.handle].sentiment = data;
                            }).error(function(e) {
                                console.log('Error ', e);
                                deferred.reject(e);
                            });
                        return deferred.promise;
                    }
                },

                getHashtags: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    if (angular.isDefined(aylienObj.analysisData[$routeParams.handle])) {
                        deferred.resolve(aylienObj.analysisData[$routeParams.handle].hashtags);
                    } else {
                        $http.get('/api/tweets/hashtags/' + encodedText)
                            .success(function(data) {
                                deferred.resolve(data);
                                aylienObj.analysisData[$routeParams.handle].hashtags = data;

                            }).error(function(e) {
                                console.log('Error ', e);
                                deferred.reject(e);
                            });
                        return deferred.promise;
                    }
                },

                getEntities: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    if (angular.isDefined(aylienObj.analysisData[$routeParams.handle])) {
                        deferred.resolve(aylienObj.analysisData[$routeParams.handle].entities);
                    } else {
                        $http.get('/api/tweets/entities/' + encodedText)
                            .success(function(data) {
                                deferred.resolve(data);
                                aylienObj.analysisData[$routeParams.handle].entities = data;

                            }).error(function(e) {
                                console.log('Error ', e);
                                deferred.reject(e);
                            });
                        return deferred.promise;
                    }
                },

                getClasses: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    if (angular.isDefined(aylienObj.analysisData[$routeParams.handle])) {
                        deferred.resolve(aylienObj.analysisData[$routeParams.handle].classes);
                    } else {
                        $http.get('/api/tweets/classify/' + encodedText)
                            .success(function(data) {
                                deferred.resolve(data);
                                aylienObj.analysisData[$routeParams.handle].classes = data;
                            }).error(function(e) {
                                console.log('Error ', e);
                                deferred.reject(e);
                            });
                        return deferred.promise;
                    }
                },

                getConcepts: function(text) {
                    var encodedText = encodeURIComponent(text);
                    var deferred = $q.defer();
                    if (angular.isDefined(aylienObj.analysisData[$routeParams.handle])) {
                        deferred.resolve(aylienObj.analysisData[$routeParams.handle].concepts);
                    } else {
                        $http.get('/api/tweets/concepts/' + encodedText)
                            .success(function(data) {
                                deferred.resolve(data);
                                aylienObj.analysisData[$routeParams.handle].concepts = data;
                            }).error(function(e) {
                                console.log('Error ', e);
                                deferred.reject(e);
                            });
                        return deferred.promise;
                    }
                }
            };
            return aylienObj;
        }
    ]);

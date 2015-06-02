'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http',
        function($q, $http) {

            var twitterObj = {

                userTimeline: [],

                loadTweets: function(userInput) {
                    var deferred = $q.defer();
                    $http.get('/api/' + userInput)
                        .success(function(data) {
                            deferred.resolve(data);
                            twitterObj.userTimeline = data;
                        }).error(function(e) {
                            console.log('Error: ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                }
            };
            return twitterObj;
        }
    ]);

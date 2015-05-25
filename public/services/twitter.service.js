'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$location', '$http',
        function($q, $location, $http) {

            var userTimeline;

            return {

                loadTweets: function(userInput) {
                    var deferred = $q.defer();
                    $http.get('/api/' + userInput)
                        .success(function(data) {
                            deferred.resolve(data);
                            userTimeline = data;
                            console.log(userTimeline);
                        }).error(function(e) {
                            console.log('Error: ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                }
            };
        }
    ]);

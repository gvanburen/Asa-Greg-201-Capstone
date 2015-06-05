'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http',
        function($q, $http) {

            var twitterObj = {

                resultsTweet: '',

                userTimeline: [],

                /* load tweets from usertimeline endpoint and
                store response in userTimeline array. */

                loadTweets: function(userInput) {
                    var deferred = $q.defer();
                    if (angular.isDefined(twitterObj.userTimeline[userInput])) {
                        deferred.resolve(twitterObj.userTimeline[userInput]);
                    } else {
                        $http.get('/api/' + userInput)
                            .success(function(data) {
                                deferred.resolve(data);
                                twitterObj.userTimeline[userInput] = data;
                            }).error(function(e) {
                                console.log('Error: ', e);
                                deferred.reject(e);
                            });
                        return deferred.promise;
                    }
                }
            };
            return twitterObj;
        }
    ]);

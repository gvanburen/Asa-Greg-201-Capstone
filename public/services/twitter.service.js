'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http',
        function($q, $http) {

            var twitterObj = {

                resultsTweet: '',

                userTimeline: {},

                checkCache: function(userInput) {
                    console.log(twitterObj.userTimeline);
                    if (!angular.isDefined(twitterObj.userTimeline[userInput])) {
                        twitterObj.userTimeline[userInput] = [];
                    }
                },

                /* load tweets from usertimeline endpoint and
                store response in userTimeline array. */

                loadTweets: function(userInput) {
                    twitterObj.checkCache(userInput);
                    var deferred = $q.defer();
                    console.log(twitterObj.userTimeline[userInput]);
                    if (twitterObj.userTimeline[userInput].length > 0) {
                        console.log(twitterObj.userTimeline[userInput]);
                        return deferred.resolve(twitterObj.userTimeline[userInput]);
                    } else {
                        $http.get('/api/' + userInput)
                            .success(function(data) {
                                deferred.resolve(data);
                                twitterObj.userTimeline[userInput] = data;
                                console.log(twitterObj.userTimeline[userInput]);
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

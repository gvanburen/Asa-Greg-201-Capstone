'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http',
        function($q, $http) {

            var twitterObj = {

                resultsTweet: '',

                userTimeline: {},

                checkCache: function(handleInput, timelineInput) {
                    if (!angular.isDefined(twitterObj.userTimeline[handleInput + '-' + timelineInput])) {
                        twitterObj.userTimeline[handleInput + '-' + timelineInput] = [];
                    }
                },
                /* load tweets from usertimeline endpoint and
                store response in userTimeline array. */

                loadTweets: function(handleInput, timelineInput) {
                    twitterObj.checkCache(handleInput, timelineInput);
                    var deferred = $q.defer();
                    if (twitterObj.userTimeline[handleInput + '-' + timelineInput].length > 0) {
                        deferred.resolve(twitterObj.userTimeline[handleInput + '-' + timelineInput]);
                    } else {
                        $http.get('/api/' + handleInput, {
                                timeline: timelineInput
                            })
                            .success(function(data) {
                                deferred.resolve(data);
                                twitterObj.userTimeline[handleInput + '-' + timelineInput] = data;
                                console.log(twitterObj.userTimeline[handleInput + '-' + timelineInput]);
                            }).error(function(e) {
                                console.log('Error: ', e);
                                deferred.reject(e);
                            });
                    }
                    return deferred.promise;
                }
            };
            return twitterObj;
        }
    ]);

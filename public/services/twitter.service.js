'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http', '$log', '$routeParams',
        function($q, $http, $log, $routeParams) {

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
                        $log.log('timelineInput :', timelineInput);
                            $http.get('/api/' + handleInput, {
                                params: { timeline: timelineInput }
                            })
                            .success(function(data) {
                                deferred.resolve(data);
                                twitterObj.userTimeline[handleInput + '-' + timelineInput] = data;
                            }).error(function(e) {
                                $log.log('Error: ', e);
                                deferred.reject(e);
                            });
                    }
                    return deferred.promise;
                },

                getSingleTweet: function(tweetId) {
                    var deferred = $q.defer();
                    $http.get('/api/results/' + tweetId)
                        .success(function(data) {
                            deferred.resolve(data);
                            twitterObj.resultsTweet = data.text;
                        }).error(function(e) {
                            $log.log('Error: ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                }
            };
            return twitterObj;
        }
    ]);

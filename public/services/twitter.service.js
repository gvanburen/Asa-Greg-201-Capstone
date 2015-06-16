'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http', '$log', '$routeParams',
        function($q, $http, $log, $routeParams) {

            var twitterObj = {

                resultsTweet: '',

                tweetArray: [],

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
                        console.log(timelineInput);
                        $http.get('/api/' + handleInput, {
                                timeline: timelineInput
                            })
                            .success(function(data) {
                                deferred.resolve(data);
                                twitterObj.userTimeline[handleInput + '-' + timelineInput] = data;
                               
                                //need to loop through tweets in an array using the tweetID. 
                                //tweetArray does not work. need to find a better way to save/access data.

                                twitterObj.tweetArray = twitterObj.userTimeline[handleInput + '-' + timelineInput];
                            }).error(function(e) {
                                $log.log('Error: ', e);
                                deferred.reject(e);
                            });
                    }
                    return deferred.promise;
                },
                getSingleTweet: function(tweetId, handleInput, timelineInput) {
                    console.log(twitterObj.tweetArray);
                    console.log(twitterObj.userTimeline[handleInput + '-' + timelineInput]);
                    //if (!twitterObj.resultsTweet) {
                    for (var i = 0; i < twitterObj.tweetArray.length; i++) {
                        if (tweetArray[i].id == tweetId) {
                            console.log(tweetArray[i].text);
                            twitterObj.resultsTweet = tweetArray[i].text;
                        }
                    }
                    //}
                }

                //getSingleTweet: function(tweetId) {
                //    var deferred = $q.defer();
                //    $http.get('/api/results/' + $routeParams.id)
                //        .success(function(data) {
                //            deferred.resolve(data);
                //            twitterObj.resultsTweet = data;
                //        }).error(function(e) {
                //            $log.log('Error: ', e);
                //            deferred.reject(e);
                //        });
                //    return deferred.promise;
                //}
            };
            return twitterObj;
        }
    ]);

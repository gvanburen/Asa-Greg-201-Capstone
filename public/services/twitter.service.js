'use strict';

angular.module('textAnalysis')
    .factory('twitterService', ['$q', '$http',
        function($q, $http) {

            var twitterObj = {

                userTimeline: [],

                sentimentData: [],

                //load tweets from usertimeline endpoint and
                //store response in userTimeline array.

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
                },

                //encode tweets to avoid routing to embedded urls
                //before submitting text of tweet to aylien endpoint

                getSentiment: function(text) {
                    var encodedText = encodeURIComponent(text);
                    console.log(encodedText);
                    var deferred = $q.defer();
                    $http.get('/api/tweets/' + encodedText)
                        .success(function(data) {
                            deferred.resolve(data);
                            twitterObj.sentimentData.push(data);
                        }).error(function(e) {
                            console.log('Error ', e);
                            deferred.reject(e);
                        });
                    return deferred.promise;
                }
            };
            return twitterObj;
        }
    ]);

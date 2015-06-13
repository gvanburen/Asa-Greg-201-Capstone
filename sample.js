var init = function() {
  $scope.words = function() { ... }();

  aylienService.getSentiment(twitterService.resultsTweet).then(...);
  aylienService.getHashtags(twitterService.resultsTweet).then(...);
  aylienService.getEntities(twitterService.resultsTweet).then(...);
  aylienService.getClasses(twitterService.resultsTweet).then(...);
  aylienService.getConcepts(twitterService.resultsTweet).then(...);
};

if (twitterService.resultsTweet.length) {
  init();
} else {
  twitterService.getSingleTweet($params.id).then(function(tweet) {
    twitterService.resultsTweet = tweet;

    init();
  });
}
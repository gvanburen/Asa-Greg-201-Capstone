var client = require('../../config/twitter.config.js');

//pass screen_name to the twitter api to load tweets from matching account
//using the statuses/user_timeline endpoint.

module.exports.getUserTweets = function(req, res) {
    var params = {
        screen_name: req.params.name,
        count: 30,
        include_rts: 1
    };

    var timeline = req.params.timeline;

    console.log(timeline);  ///Returns Undefined...

    var endpoint;

    if (timeline == 'home') {
        endpoint = 'statuses/home_timeline';
    } else {
        endpoint = 'statuses/user_timeline';
    }

    client.get(endpoint, params, function(error, tweets, response) {
        if (endpoint == 'statuses/user_timeline') {
            console.log('TWEETS BEFORE', tweets.length);
            var tweets = tweets.filter(function(val) {
                return (!val.hasOwnProperty('retweeted_status'));
            });
        }
        console.log('TWEETS AFTER', tweets.length);
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });
};

module.exports.getSingleTweet = function(req, res) {
    client.get('statuses/show', {
        id: req.params.id
    }, function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });

};

var client = require('../../config/twitter.config.js');

//pass screen_name to the twitter api to load tweets from matching account
//using the statuses/user_timeline endpoint.

module.exports.getUserTweets = function(req, res) {

    var params = {
        screen_name: req.params.name
    };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });
};

//pass screen_name to the twitter api to load tweets from matching account
//using the statuses/home_timeline endpoint.

module.exports.getHomeTweets = function(req, res) {

    var params = {
        screen_name: req.params.name
    };

    client.get('statuses/home_timeline', params, function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });
};
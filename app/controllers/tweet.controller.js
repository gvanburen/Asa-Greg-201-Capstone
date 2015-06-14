var client = require('../../config/twitter.config.js');

//pass screen_name to the twitter api to load tweets from matching account
//using the statuses/user_timeline endpoint.

module.exports.getUserTweets = function(req, res) {
    var params = {
        screen_name: req.params.name
    };

    var timeline = req.params.timeline;

    var endpoint;

    if (timeline == 'home') {
        endpoint = 'statuses/home_timeline';
    } else {
        endpoint = 'statuses/user_timeline';
    }

    client.get(endpoint, params, function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });
};

module.exports.getSingleTweet = function(req, res) {
    client.get('statuses/show/' + req.params.id, function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });

};

var client = require('../../config/twitter.config.js');

//pass screen_name to the twitter api to load tweets from matching account
//using the statuses/user_timeline endpoint.

module.exports.getUserTweets = function(req, res) {

    var params = {
        screen_name: req.params.name
    };

    //does not access the timeline parameter... unable to access
    //var timeline = req.params.timeline;

    
    var endpoint;

    if (timeline == 'home') {
        endpoint = 'statuses/home_timeline';
        console.log('home_timeline');
    } else {
        endpoint = 'statuses/user_timeline';
        console.log('user_timeline');
    }
    //    console.log(endpoint);

    client.get(endpoint, params, function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });
};

module.exports.getSingleTweet = function(req, res) {

    //returns appropriate parameters but does not

    console.log('Req.params.id', req.params.id);

    client.get('statuses/show/' + req.params.id , function(error, tweets, response) {
        res.json(tweets);
        if (error) {
            console.log(error);
        }
    });

};

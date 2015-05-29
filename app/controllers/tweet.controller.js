var client = require('../../config/twitter.config.js');

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

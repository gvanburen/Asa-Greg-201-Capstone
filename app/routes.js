var controller = require('./controllers/tweet.controller');
var aylienController = require('./controllers/aylien.controller.js');

//require in controllers for 3rd party apis to
// expose functions that make requests to those endpoints.

module.exports = function(app) {

    app.get('/api/:name', controller.getUserTweets);
    app.get('/api/tweets/:text', aylienController.getSentiment);

    app.get('*', function(req, res) {
        res.sendFile('/public/index.html');
    });
};

var controller = require('./controllers/tweet.controller');
var aylienController = require('./controllers/aylien.controller.js');
var path = require('path');

//require in controllers for 3rd party apis to
// expose functions that make requests to those endpoints.

module.exports = function(app) {

    app.get('/api/:name', controller.getUserTweets);
    app.get('/api/results/:id', controller.getSingleTweet);
    app.get('/api/tweets/sentiment/:text', aylienController.getSentiment);
    app.get('/api/tweets/hashtags/:text', aylienController.getHashtags);
    app.get('/api/tweets/entities/:text', aylienController.getEntities);
    app.get('/api/tweets/classify/:text', aylienController.getClasses);
    app.get('/api/tweets/concepts/:text', aylienController.getConcepts);

    app.get('*', function(req, res) {
        res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    });
};

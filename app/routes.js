var controller = require('./controllers/tweet.controller');

module.exports = function(app) {

    app.get('/api/:name', controller.getUserTweets);

    app.get('*', function(req, res) {
        res.sendFile('./public/index.html');
    });
};

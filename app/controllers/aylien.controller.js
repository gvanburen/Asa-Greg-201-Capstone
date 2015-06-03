var aylien = require('../../config/aylien.config.js');
var Promise = require('bluebird');

var join = Promise.join;

//send text to aylien api for sentiment analysis

var sentiment = function(req, res) {
    aylien.sentiment({
        'text': req.params.text
    }).then(function(data) {
        console.log(data);
    }).error(function(e) {
        console.log('Error: ', e);
    });
};

//suggests hashtags based on submitted text.

var getHashtags = function(req, res) {
    aylien.hashtags({
        'text': req.params.text
    }).then(function(data) {
        console.log(data);
    }).error(function(e) {
        console.log('Error: ', e);
    });
};

// Extracts entities from submitted text. URLs, names, emails.

var getEntities = function(req, res) {
    aylien.entities({
        'text': req.params.text
    }).then(function(data) {
        console.log(data);
    }).error(function(e) {
        console.log('Error: ', e);
    });
};

//extracts concepts from text

var getConcepts = function(req, res) {
    aylien.concepts({
        'text': req.params.text
    }).then(function(data) {
        console.log(data);
    }).error(function(e) {
        console.log('Error: ', e);
    });
};


//classifies content according to NewsCode standard

var classify = function(req, res) {
    aylien.classify({
        'text': req.params.text
    }).then(function(data) {
        console.log(data);
    }).error(function(e) {
        console.log('Error: ', e);
    });
};

module.exports.getSentiment = function(req, res) {
    join(sentiment(req), getHashtags(req), getEntities(req), getConcepts(req), classify(req),
        function(sentiment, hashtags, entities, concepts, classes) {
            console.log(sentiment + hashtags + concepts);
        });
};

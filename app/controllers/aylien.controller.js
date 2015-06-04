var aylien = require('../../config/aylien.config.js');

//send text to aylien api for sentiment analysis

module.exports.getSentiment = function(req, res) {
    aylien.sentiment({
        'text': req.params.text
    }, function(error, response) {
        res.json(response);
        if (error === null) {
            console.log(error);
        }
    });
};

//send text to aylien api to return suggested hashtags

module.exports.getHashtags = function(req, res) {
    aylien.hashtags({
        'text': req.params.text
    }, function(error, response) {
        res.json(response);
        if (error === null) {
            console.log(error);
        }
    });
};

//send text to aylien api to return entities within tweets

module.exports.getEntities = function(req, res) {
    aylien.entities({
        'text': req.params.text
    }, function(error, response) {
        res.json(response);
        if (error === null) {
            console.log(error);
        }
    });
};

//send text to aylien api to return tweet classifications

module.exports.getClasses = function(req, res) {
    aylien.classify({
        'text': req.params.text
    }, function(error, response) {
        res.json(response);
        if (error === null) {
            console.log(error);
        }
    });
};

//send text to aylien api to return relevant concepts

module.exports.getConcepts = function(req, res) {
    aylien.concepts({
        'text': req.params.text
    }, function(error, response) {
        res.json(response);
        if (error === null) {
            console.log(error);
        }
    });
};


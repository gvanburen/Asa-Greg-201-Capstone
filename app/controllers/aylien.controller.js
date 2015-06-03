var aylien = require('../../config/aylien.config.js');
<<<<<<< HEAD
var Promise = require('bluebird');

var join = Promise.join;

//send text to aylien api for sentiment analysis


var sentiment = function(req, res) {
    return aylien.sentiment({
        "text": req.params.text
    }).then(function(data){
      console.log(data);
    });
};

////suggests hashtags based on submitted text.
//
//var getHashtags = function(req, res) {
//    return new Promise(function(resolve, reject) {
//        aylien.hashtags({
//            'text': req.params.text
//        }).then(function(data) {
//            resolve(data);
//        }).error(function(e) {
//            reject(e);
//        });
//    });
//};
//
//// Extracts entities from submitted text. URLs, names, emails.
//
//var getEntities = function(req, res) {
//    return new Promise(function(resolve, reject) {
//        aylien.entities({
//            'text': req.params.text
//        }).then(function(data) {
//            resolve(data);
//        }).error(function(e) {
//            reject(e);
//        });
//    });
//};
//
////extracts concepts from text
//
//var getConcepts = function(req, res) {
//    return new Promise(function(resolve, reject) {
//        aylien.concepts({
//            'text': req.params.text
//        }).then(function(data) {
//            resolve(data);
//        }).error(function(e) {
//            reject(e);
//        });
//    });
//};
//
////classifies content according to NewsCode standard
//
//var classify = function(req, res) {
//    return new Promise(function(resolve, reject) {
//        aylien.classify({
//            'text': req.params.text
//        }).then(function(data) {
//            resolve(data);
//        }).error(function(e) {
//            reject(e);
//        });
//    });
//};

module.exports.getSentiment = function(req, res) {
    join(sentiment(req, res), // getHashtags(req, res), getEntities(req, res), //getConcepts(req), classify(req),
        function(sentiment) {
            console.log(sentiment);
        });
};
=======

//pass tweet data for analysis to the aylien.sentiment endpoint

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
>>>>>>> upstream/master

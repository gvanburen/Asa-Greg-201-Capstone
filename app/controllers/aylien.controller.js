var aylien = require('../../config/aylien.config.js');

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
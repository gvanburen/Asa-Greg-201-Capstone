var Twitter = require('twitter');

module.exports = new Twitter({
    consumer_key:process.env.consumer_key,
    consumer_secret:process.env.consumer_secret,
    access_token_key:process.env.access_token,
    access_token_secret:process.env.access_secret
 });
const { readFile } = require("fs");
const { resolve } = require("path");
const request = require("request");
const omdb = require("./omdb");
const spotify = require("./spotify");
const twitter = require("./twitter");
const random = require("./random");

const liri = {
  "my-tweets": callback => {
    const params = { screen_name: "bogs_boney" };
    twitter.get("statuses/user_timeline", params, function(
      err,
      tweets,
      response
    ) {
      if (err) return callback(err);
      let res = "";
      const filteredTweets = tweets.map(tweet =>{
        let obj = {};
        obj.text = tweet.text;
        obj.createdAt = tweet.created_at;
        return obj;
      });
      callback(null, filteredTweets);
    });
  },
  "spotify-this-song": (callback, song) => {
    if (!song) song = "ace of base the sign";
    spotify(song, callback);
  },
  "movie-this": (callback, movie) => {
    if (!movie) { movie = "mr nobody"; }
    omdb(movie, callback);
  },
  "do-what-it-says": callback => {
    readFile(resolve(rootname, "./lib/random.txt"), "utf8", (err, res) => {
      if (err) return callback(err);
      const randomLine = random.fromArray(res.split("\n"));
      const method = randomLine.split(" ")[0];
      const value = randomLine.split(randomLine.split(" ")[0])[1];
      liri[method](callback, value);
    });
  }
};



module.exports = liri;
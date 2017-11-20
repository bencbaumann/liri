const request = require('request');
const key = '40e9cece';

module.exports = (movie, callback)=>{
    const url = `http://www.omdbapi.com/?apikey=${key}&t=${movie}`;

    request(url, (err, res, body)=>{
        const resObj = JSON.parse(body);
        const obj = {};
        obj.title = resObj.Title;
        obj.year = resObj.Year;
        obj.imdbRating = resObj.imdbRating;
        // need rotten tomatoes rating
        obj.country = resObj.Country;
        obj.language = resObj.Language;
        obj.plot = resObj.Plot;
        obj.actors = resObj.Actors;
        
        callback(null, obj);
    });
};


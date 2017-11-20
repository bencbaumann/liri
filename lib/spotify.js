const Spotify = require('node-spotify-api');

const spotify = new Spotify({
 id: 'e224c1ac99d7480e800c94ea2b74dba7',
 secret: 'a2de380cd6ac49f297a796811d06fc5a'
});

module.exports = (song, callback)=>{
  spotify
  .search({ type: 'track', query: song, limit: 1})
  .then(function(res) {
    const obj ={};
    obj.artist = res.tracks.items[0].album.artists
      .map(artist => artist.name)
      .reduce((acc, artistName)=> acc + ", " + artistName);
    obj.songName = res.tracks.items[0].name;
    obj.albumName = res.tracks.items[0].album.name;
    obj.previewLink = res.tracks.items[0].preview_url || 'This song has no preview link';
    callback(null, obj);
  })
  .catch(function(err) {
      return callback(err);
  });  
}
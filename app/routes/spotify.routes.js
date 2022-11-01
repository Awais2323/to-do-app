const spotifyController = require("../controllers/spotify.controller");

module.exports = function (app) {

    app.get("/getFeaturedPlaylists", spotifyController.getFeaturedPlaylists);
    app.get("/getPlaylist", spotifyController.getPlaylist);
    app.get("/getTracks", spotifyController.getTracks);

};
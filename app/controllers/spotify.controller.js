const SpotifyWebApi = require('spotify-web-api-node');
const { clientId, clientSecret, redirectUri } = require('../config/config');

// credentials for spotifyApi
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri
});

exports.getFeaturedPlaylists = async (req, res) => {
    const country = req.query.country
    let token = ''
    let params = { timestamp: '2022-10-08T09:00:00' }
    if (country) {
        params.country = country;
    }
    await spotifyApi.clientCredentialsGrant().then(
        function(data) {
          token = data.body['access_token'];
        })
    await spotifyApi.setAccessToken(token);
    await spotifyApi.getFeaturedPlaylists(params).then(
        function(data) {
            res.status(200).json({
                status: 200,
                success: true,
                message: "Created Successfully",
                data: data.body
            });
        },
        function(err) {
            console.error(err);
            res.status(500).json({
                status: 500,
                success: false,
                message: err || "Something Went wrong while requesting!"
            });
        }
      );
};

exports.getPlaylist = async (req, res) => {
    const id = req.query.id
    let token = ''
    if (id) {
        await spotifyApi.clientCredentialsGrant().then(
            function (data) {
                token = data.body['access_token'];
            })
        await spotifyApi.setAccessToken(token);
        await spotifyApi.getPlaylist(id).then(
            function (data) {
                res.status(200).json({
                    status: 200,
                    success: true,
                    message: "Created Successfully",
                    data: data.body
                });
            },
            function (err) {
                console.error(err);
                res.status(500).json({
                    status: 500,
                    success: false,
                    message: err || "Something Went wrong while requesting!"
                });
            }
        );
    } else {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Playlist id is required"
        });
    }
};

exports.getTracks = async (req, res) => {
    const id = req.query.id
    let token = ''
    if (id) {
        await spotifyApi.clientCredentialsGrant().then(
            function (data) {
                token = data.body['access_token'];
            })
        await spotifyApi.setAccessToken(token);
        await spotifyApi.getTracks([id]).then(
            function (data) {
                res.status(200).json({
                    status: 200,
                    success: true,
                    message: "Created Successfully",
                    data: data.body
                });
            },
            function (err) {
                console.error(err);
                res.status(500).json({
                    status: 500,
                    success: false,
                    message: err || "Something Went wrong while requesting!"
                });
            }
        );
    } else {
        res.status(500).json({
            status: 500,
            success: false,
            message: "Playlist id is required"
        });
    }
};

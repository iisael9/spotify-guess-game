export default function handler(req, res) {
    const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        scope: 'playlist-read-private',
    }).toString()}`;

    res.redirect(authUrl);
}

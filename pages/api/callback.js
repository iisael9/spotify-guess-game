import fetch from "node-fetch";

let globalPlaylists = []; // Temporary in-memory storage

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { code } = req.query;

    if (!code) {
      console.error("No authorization code provided.");
      return res.redirect("/home?error=true");
    }

    try {
      // Fetch access token from Spotify
      const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
          ).toString("base64")}`,
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        }),
      });

      if (!tokenResponse.ok) {
        console.error("Failed to fetch access token:", await tokenResponse.text());
        return res.redirect("/home?error=true");
      }

      const tokenData = await tokenResponse.json();
      const { access_token } = tokenData;

      // Fetch playlists using the access token
      const playlistResponse = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!playlistResponse.ok) {
        console.error("Failed to fetch playlists:", await playlistResponse.text());
        return res.redirect("/home?error=true");
      }

      const playlistsData = await playlistResponse.json();

      // Filter out invalid playlists and extract relevant data
      globalPlaylists = playlistsData.items
        .filter((playlist) => playlist && playlist.id) // Ensure valid playlists
        .map((playlist) => ({
          id: playlist.id,
          name: playlist.name,
          description: playlist.description || "No description available",
          image: playlist.images?.[0]?.url || "/placeholder-image.jpg",
          external_url: playlist.external_urls?.spotify,
        }));

      console.log("Fetched and filtered playlists:", globalPlaylists);

      return res.redirect("/home?success=true");
    } catch (error) {
      console.error("Error in callback handler:", error);
      return res.redirect("/home?error=true");
    }
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

export { globalPlaylists };

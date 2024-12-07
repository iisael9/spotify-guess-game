import { globalPlaylists } from "./callback";

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log("Returning playlists:", globalPlaylists);
    res.status(200).json({ playlists: globalPlaylists });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

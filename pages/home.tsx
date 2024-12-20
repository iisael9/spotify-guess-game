import Link from "next/link";
import { useEffect, useState } from "react";

interface Playlist {
  id: string;
  name: string;
  description: string;
  image: string;
  external_url: string;
}

export default function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);
  const [error, setError] = useState(false);
  const [roomCode, setRoomCode] = useState(""); // For joining a room

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get("error") === "true") {
      setError(true);
    } else if (urlParams.get("success") === "true") {
      // Fetch playlists from the `/api/playlists` endpoint
      fetch("/api/playlists")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch playlists");
          }
          return res.json();
        })
        .then((data) => {
          // Ensure playlists have a valid image
          const updatedPlaylists = data.playlists.map((playlist: Playlist) => ({
            ...playlist,
            image: playlist.image || "/placeholder-image.jpg", // Use a placeholder if no image exists
          }));
          setPlaylists(updatedPlaylists);

          // Automatically set "Your Top Songs 2024" as the default selection
          const defaultPlaylist = updatedPlaylists.find(
            (playlist: Playlist) =>
              playlist.name.toLowerCase() === "your top songs 2024"
          );
          setSelectedPlaylist(defaultPlaylist || null);
        })
        .catch((err) => {
          console.error("Error fetching playlists:", err);
          setError(true);
        });
    }
  }, []);

  const handlePlaylistSelection = (playlist: Playlist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to Spotify Guess Game 🎵</h1>
      {error ? (
        <p className="text-red-500 mt-4">
          Failed to load playlists. Please try logging in again.
        </p>
      ) : playlists.length > 0 ? (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold">Select a Playlist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {playlists.map((playlist) => (
                <button
                  key={playlist.id}
                  onClick={() => handlePlaylistSelection(playlist)}
                  className={`bg-white p-4 rounded-lg shadow hover:shadow-md border ${selectedPlaylist?.id === playlist.id
                      ? "border-indigo-500"
                      : "border-gray-200"
                    }`}
                >
                  <img
                    src={playlist.image}
                    alt={playlist.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold">{playlist.name}</h3>
                </button>
              ))}
            </div>
          </div>

          {selectedPlaylist && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Selected Playlist</h2>
              <img
                src={selectedPlaylist.image}
                alt={selectedPlaylist.name}
                className="w-32 h-32 object-cover rounded mt-4 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold">{selectedPlaylist.name}</h3>
              <p className="text-gray-600 mt-2">{selectedPlaylist.description}</p>
              <a
                href={selectedPlaylist.external_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View on Spotify
              </a>

              {/* Game Room Actions */}
              <div className="mt-8">
                <Link href={`/GameRoom?playlistId=${selectedPlaylist.id}`}>
                  <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600">
                    Create Game Room
                  </button>
                </Link>
              </div>

              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Enter Room Code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  className="border rounded-lg px-4 py-2 w-60"
                />
                <Link href={`/GameRoom?roomCode=${roomCode}`}>
                  <button
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 ml-4"
                    disabled={!roomCode}
                  >
                    Join Game Room
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="mt-4 text-gray-700">Loading playlists...</p>
      )}
    </div>
  );
}

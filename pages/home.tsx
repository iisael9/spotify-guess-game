import { useEffect, useState } from 'react';

interface Playlist {
  id: string;
  name: string;
  description: string;
  image: string;
  external_url: string;
}

export default function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('error') === 'true') {
      setError(true);
    } else if (urlParams.get('success') === 'true') {
      // Fetch playlists from the `/api/playlists` endpoint
      fetch('/api/playlists')
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch playlists');
          }
          return res.json();
        })
        .then((data) => {
          setPlaylists(data.playlists);
        })
        .catch((err) => {
          console.error('Error fetching playlists:', err);
          setError(true);
        });
    }
  }, []);

  return (
    <div className="min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold">Welcome to Spotify Guess Game 🎵</h1>
      {error ? (
        <p className="text-red-500 mt-4">Failed to load playlists. Please try logging in again.</p>
      ) : playlists.length > 0 ? (
        <ul className="mt-8 space-y-4">
          {playlists.map((playlist) => (
            <li key={playlist.id} className="flex items-center space-x-4">
              <img
                src={playlist.image}
                alt={playlist.name}
                className="w-16 h-16 rounded shadow"
              />
              <div>
                <h2 className="text-xl font-semibold">{playlist.name}</h2>
                <p className="text-gray-600">{playlist.description}</p>
                <a
                  href={playlist.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View on Spotify
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4">Loading playlists...</p>
      )}
    </div>
  );
}

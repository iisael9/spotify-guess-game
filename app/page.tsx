"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import LoginButton from "./components/LoginButton";

interface Playlist {
  id: string;
  name: string;
  description: string;
  image: string;
  external_url: string;
}

export default function Home() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchPlaylists() {
      try {
        console.log("Fetching playlists...");

        const res = await fetch("/api/playlists"); // New endpoint to fetch playlists
        if (!res.ok) {
          console.error("Failed to fetch playlists:", res.statusText);
          return;
        }

        const data = await res.json();
        console.log("Fetched playlists:", data);

        setPlaylists(data.playlists || []);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error in fetchPlaylists:", error);
      }
    }

    // Check if login was successful
    if (searchParams && searchParams.get("success") === "true") {
      fetchPlaylists();
    }
  }, [searchParams]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Welcome to Spotify Guess Game 🎵
        </h1>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        {!loggedIn ? (
          <>
            <p className="text-center text-lg sm:text-xl">
              Log in with Spotify to start playing! Guess which playlist each song belongs to and have fun with friends.
            </p>
            {searchParams && searchParams.get("error") && (
              <p className="text-red-500">Authentication failed. Please try again.</p>
            )}
            <LoginButton />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold">Select a Playlist</h2>
            <ul className="grid gap-4">
              {playlists.map((playlist) => (
                <li key={playlist.id} className="flex items-center gap-4">
                  <img
                    src={playlist.image || "/placeholder.png"}
                    alt={playlist.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{playlist.name}</p>
                    <p className="text-sm text-gray-600">{playlist.description || "No description available"}</p>
                    <a
                      href={playlist.external_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View on Spotify
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>

      <footer className="row-start-3 flex flex-col gap-2 items-center text-sm text-gray-500">
        <p>Created with ❤️ using Next.js</p>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Learn more about Next.js
        </a>
      </footer>
    </div>
  );
}

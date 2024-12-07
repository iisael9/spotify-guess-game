Spotify Guess Game 🎵

An interactive web app where users log in with Spotify, choose a playlist, and play a guessing game based on their songs.
What is Spotify Guess Game?

Spotify Guess Game is a fun and engaging project designed to bring music lovers together. Users log in with their Spotify account, pick a playlist, and the game challenges them to guess which playlist a song belongs to. It’s perfect for parties, testing your music knowledge, or simply having fun with friends!
Project Stages

    Initial Setup
        Set up the Spotify API for authentication and fetching playlists.
        Integrated Next.js and TailwindCSS for a clean and responsive design.

    Playlist Fetching
        Successfully fetched user playlists after Spotify login.
        Displayed playlists with names, descriptions, and images.

    Playlist Selection
        Enabled users to manually select a playlist to play from.
        Added "Your Top Songs 2024" as the default playlist if available.

    Game Logic (Upcoming)
        Build a song-guessing mechanism using the selected playlist.
        Develop a scoring and ranking system for players.

What We've Achieved So Far

    Spotify Integration:
        Users can securely log in with their Spotify accounts.
        Fetched and displayed playlists in an intuitive interface.

    Playlist Management:
        Default to "Your Top Songs 2024" if available.
        Allow users to manually select from their playlists.

    Responsive Design:
        A clean, responsive interface optimized for both desktop and mobile.

    Error Handling:
        Handled login and playlist-fetching errors with user-friendly messages.

How to Run Locally

    Clone the Repository

git clone https://github.com/your-username/spotify-guess-game.git
cd spotify-guess-game

Install Dependencies

npm install

Add Spotify Credentials Create a .env.local file with:

SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback

Run the App

    npm run dev

    Open http://localhost:3000 in your browser.

Tech Stack

    Framework: Next.js
    Styling: TailwindCSS
    API: Spotify Web API

Next Steps

    Build and integrate the song-guessing game logic.
    Add a scoring system for individual and multiplayer modes.
    Improve UI/UX for a smoother experience.
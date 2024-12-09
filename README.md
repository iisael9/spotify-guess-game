Spotify Guess Game 🎵

An interactive web app where users log in with Spotify, contribute their playlists, and compete to guess whose playlist a song belongs to!
What is Spotify Guess Game?

Spotify Guess Game is a fun and interactive multiplayer game designed for music lovers. Users log in with their Spotify accounts, share playlists, and take turns guessing whose playlist a song is from. Perfect for parties, connecting with friends, or testing your music knowledge.
Project Stages
1. Initial Setup

    Integrated Spotify API for secure user authentication and fetching playlists.
    Used Next.js and TailwindCSS to create a responsive and user-friendly design.

2. Playlist Fetching

    Successfully fetched user playlists after Spotify login.
    Displayed playlists with names, descriptions, and album artwork.

3. Playlist Selection

    Users can manually select a playlist or use "Your Top Songs 2024" as the default if available.

4. Game Logic

    Implemented rules for song selection, guessing, scoring, and transitioning rounds.
    Created a system to randomize songs without repetition, ensuring fairness and excitement.

5. Multiplayer Features (In Progress)

    Added room-based gameplay where a host invites others to join using a code.
    Host-controlled or individual playback options.

What We've Achieved So Far
Spotify Integration:

    Users can securely log in with their Spotify accounts.
    Successfully fetched and displayed user playlists.

Playlist Management:

    Default to "Your Top Songs 2024" if available.
    Allow users to manually select playlists.

Responsive Design:

    Clean, responsive interface optimized for both desktop and mobile.

Game Logic:

    Created a structured, engaging game flow with clear rules and a scoring system.

Error Handling:

    Handled login and playlist-fetching errors gracefully with user-friendly feedback.

Game Rules
Objective:

    Guess which playlist(s) the current song belongs to and accumulate points by making correct guesses.

Scoring:

    Correct Guess: +1 point for each correct player guessed.
    Incorrect Guess: -1 point for each incorrect player guessed.
    "Only in My Playlist" Guess: +1 point if correct, -1 if wrong.
    Leaderboard: Updates automatically after each round.

Gameplay Rules:

    Room Setup:
        The host creates a room and shares a code with other players.
        Players join the room using the shared code.
    No Song Repeats:
        Each song is unique across all rounds.
    Playlist Randomization:
        Songs are randomly chosen from all contributed playlists.
        The same player’s playlist cannot be selected more than twice consecutively.
    Mandatory Guesses:
        Players must make at least one guess per round.
    Playback Options:
        Songs can play individually on each player’s device or collectively through the host’s Spotify (Host-Controlled Playback).

App Flow
1. Room Setup Phase

    Host Responsibilities:
        Create a room and share the code with friends.
        Configure game settings:
            Playback mode: Individual Playback or Host-Controlled Playback.
            Number of rounds.
            Auto-Transition: Enable/disable automatic transitions.

2. Game Flow

    Round Start:
        A song is selected randomly from the pool of playlists.
        The song starts playing.
    Playback Controls:
        Host Options:
            Replay the song.
            Enable "Replay Song Until Manual Transition" for looping.
            Enable "Auto-Transition" for automatic round transitions.
    Guess Submission:
        Players guess whose playlist the song belongs to.
        Players cannot skip; all must make at least one selection.
        Guesses are locked after submission.
    Score Reveal:
        Correct answers are revealed, and scores are calculated:
            Correct guesses: +1 point per correct player guessed.
            Incorrect guesses: -1 point per incorrect player guessed.
            "Only in My Playlist": +1 point if correct, -1 if wrong.
        The leaderboard is updated and displayed.
    Next Round Transition:
        Host decides when to move to the next round or allows automatic transition.

Example Scenario
Room Setup:

    Host: Alice
    Players: Bob, Charlie, Dana
    Playback Mode: Host-Controlled Playback
    Rounds: 3
    Auto-Transition: Disabled

Round 1:

    Song: Song A (from Alice’s playlist)
    Playback: Song plays on Alice’s device for everyone to hear.
    Guesses:
        Alice: Guesses "Only in My Playlist."
        Bob: Guesses "Alice."
        Charlie: Guesses "Alice."
        Dana: Guesses "Alice."
    Score Calculation:
        Alice: +1 (Correctly guessed "Only in My Playlist.")
        Bob: +1 (Correctly guessed "Alice.")
        Charlie: +1 (Correctly guessed "Alice.")
        Dana: +1 (Correctly guessed "Alice.")
    Leaderboard:

    1. Alice: 1 point
    2. Bob: 1 point
    3. Charlie: 1 point
    4. Dana: 1 point

How to Run Locally
Clone the Repository:

git clone https://github.com/your-username/spotify-guess-game.git
cd spotify-guess-game

Install Dependencies:

npm install

Add Spotify Credentials:

    Create a .env.local file with:

    SPOTIFY_CLIENT_ID=your-client-id
    SPOTIFY_CLIENT_SECRET=your-client-secret
    SPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback

Run the App:

npm run dev

    Open http://localhost:3000 in your browser.

Tech Stack

    Framework: Next.js
    Styling: TailwindCSS
    API: Spotify Web API

Next Steps

    Build the multiplayer song-guessing logic.
    Implement robust scoring mechanics and a leaderboard.
    Improve the user interface for a polished experience.
    Add more playback customization options for the host.
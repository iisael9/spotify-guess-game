Spotify Guess Game 🎵

Welcome to the Spotify Guess Game, an interactive web application where users log in with their Spotify account, select a playlist, and engage in a guessing game based on their music preferences.
Features
1. Spotify Authentication

    Users can log in securely using their Spotify account.
    Once authenticated, the app fetches the user's playlists.

2. Playlist Fetching and Display

    After login, the app displays a list of user playlists fetched from Spotify.
    Each playlist is shown with:
        Its cover image
        Name
        Description
        A link to view it on Spotify

3. Default Playlist Selection

    Automatically selects "Your Top Songs 2024" as the default playlist, if available.
    If "Your Top Songs 2024" isn't available, users can manually select any playlist.

4. Responsive Design

    The app is optimized for different screen sizes:
        Grid layout for playlists on small, medium, and large screens.
        Easy navigation and clear visual hierarchy.

5. Interactive Playlist Selection

    Playlists are displayed as clickable cards.
    The selected playlist is highlighted, with details shown prominently below the grid.

6. Error Handling

    Displays appropriate error messages if playlists fail to load or if login fails.

How to Run Locally
1. Clone the Repository

git clone https://github.com/your-username/spotify-guess-game.git
cd spotify-guess-game

2. Install Dependencies

Make sure you have Node.js installed, then run:

npm install

3. Add Environment Variables

Create a .env.local file in the root directory and add your Spotify credentials:

SPOTIFY_CLIENT_ID=your-client-id
SPOTIFY_CLIENT_SECRET=your-client-secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback

4. Run the App

npm run dev

The app will be available at http://localhost:3000.
Project Roadmap

    Game Logic Implementation
        Develop a game screen after a playlist is selected.
        Present songs from the playlist and let users guess specific details (e.g., artist, song title).

    Improved UI/UX
        Add animations and transitions for a more dynamic experience.
        Enhance visual feedback for interactions.

    Scoring and Multiplayer
        Implement a scoring system for correct guesses.
        Add multiplayer support for guessing games with friends.

    Deployment
        Deploy the app to platforms like Vercel for easy sharing.

Tech Stack

    Framework: Next.js
    Styling: TailwindCSS
    Spotify API: Used for authentication and fetching user playlists
    State Management: React useState and useEffect hooks

Challenges and Solutions
1. Error Handling in Callback

    Fixed an issue where invalid or null playlist data caused errors during callback handling.
    Implemented robust error checks and default values to prevent crashes.

2. Dynamic Playlist Selection

    Added logic to automatically select "Your Top Songs 2024" or allow users to pick a playlist manually.

3. Styling and Responsiveness

    Used TailwindCSS for consistent styling and a responsive grid layout for playlists.

Credits

    Spotify Web API: For providing access to user playlists and authentication.
    TailwindCSS: For clean, responsive design.
    Next.js: For building the core application.
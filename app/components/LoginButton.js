"use client";
export default function LoginButton() {
    const handleLogin = () => {
        window.location.href = "/api/auth";
    };

    return (
        <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Log in with Spotify
        </button>
    );
}

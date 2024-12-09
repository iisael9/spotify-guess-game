import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Connect to the backend

export default function GameRoom() {
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        // Listen for server messages
        socket.on('message', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        // Clean up on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        socket.emit('message', 'Hello from the frontend!');
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Game Room</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={sendMessage}
            >
                Send Message to Server
            </button>
            <div className="mt-4">
                <h2 className="text-xl">Messages:</h2>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

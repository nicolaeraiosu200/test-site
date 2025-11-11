import React, { useState } from 'react';

const PasswordGate: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'musca') {
            onUnlock();
        } else {
            setError('Parola este incorectă. Te rog încearcă din nou.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-pink-100">
            <h1 className="text-2xl font-bold mb-4">Autentificare</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Introdu parola"
                    className="p-2 mb-4 border border-pink-300 rounded"
                />
                <button type="submit" className="bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition">
                    Accesează formularul
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
        </div>
    );
};

export default PasswordGate;
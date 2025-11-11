import React, { useState } from 'react';

const PostForm = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === 'musca') {
            setIsAuthenticated(true);
        } else {
            alert('Parola incorectă!');
        }
    };

    const handlePostSubmit = (e) => {
        e.preventDefault();
        // Logica pentru a trimite postarea
        console.log({
            name: itemName,
            description: itemDescription,
            price: itemPrice,
        });
        // Resetare formular
        setItemName('');
        setItemDescription('');
        setItemPrice('');
    };

    return (
        <div className="p-4">
            {!isAuthenticated ? (
                <form onSubmit={handlePasswordSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Introdu parola"
                        className="border p-2 mb-4"
                    />
                    <button type="submit" className="bg-pink-500 text-white p-2">
                        Autentificare
                    </button>
                </form>
            ) : (
                <form onSubmit={handlePostSubmit}>
                    <input
                        type="text"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        placeholder="Numele produsului"
                        className="border p-2 mb-4"
                        required
                    />
                    <textarea
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        placeholder="Descrierea produsului"
                        className="border p-2 mb-4"
                        required
                    />
                    <input
                        type="number"
                        value={itemPrice}
                        onChange={(e) => setItemPrice(e.target.value)}
                        placeholder="Prețul produsului"
                        className="border p-2 mb-4"
                        required
                    />
                    <button type="submit" className="bg-pink-500 text-white p-2">
                        Creează Postare
                    </button>
                </form>
            )}
        </div>
    );
};

export default PostForm;
import React, { useState } from 'react';
import PasswordGate from '../components/PasswordGate';
import PostForm from '../components/PostForm';

const CreatePost = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = (authenticated) => {
        setIsAuthenticated(authenticated);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
            <h1 className="text-3xl font-bold text-pink-600">Creează o Postare</h1>
            {!isAuthenticated ? (
                <PasswordGate onAuthenticate={handleAuthentication} />
            ) : (
                <PostForm />
            )}
        </div>
    );
};

export default CreatePost;
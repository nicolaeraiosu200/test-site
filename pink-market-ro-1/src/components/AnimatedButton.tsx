import React from 'react';

const AnimatedButton = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105"
        >
            {children}
        </button>
    );
};

export default AnimatedButton;
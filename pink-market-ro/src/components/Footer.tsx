import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-pink-500 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Pink Market. Toate drepturile rezervate.</p>
                <div className="mt-2">
                    <a href="/contact" className="text-white hover:underline">Contact</a> | 
                    <a href="/about" className="text-white hover:underline"> Despre noi</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
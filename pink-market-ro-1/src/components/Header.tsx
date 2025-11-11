import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-pink-500 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
                <Link to="/">Pink Market</Link>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-pink-300">Acasă</Link>
                    </li>
                    <li>
                        <Link to="/create-post" className="text-white hover:text-pink-300">Creează Postare</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
import React from 'react';

interface PostCardProps {
    title: string;
    description: string;
    price: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, description, price }) => {
    return (
        <div className="bg-pink-200 border border-pink-400 rounded-lg p-4 m-2 shadow-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-bold text-pink-600">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="text-lg font-semibold text-pink-800">Preț: {price} RON</p>
        </div>
    );
};

export default PostCard;
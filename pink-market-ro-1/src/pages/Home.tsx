import React from 'react';
import { PostCard } from '../components/PostCard';
import { usePosts } from '../hooks/usePosts';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Home: React.FC = () => {
    const { posts } = usePosts();

    return (
        <div className="bg-pink-100 min-h-screen">
            <Header />
            <main className="p-4">
                <h1 className="text-3xl font-bold text-center text-pink-600">Bine ai venit pe Pink Market!</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Nu sunt postări disponibile.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-16 bg-gradient-to-br from-sky-100 to-indigo-100 min-h-screen flex items-center justify-center">
        <Container>
          <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">🔐 Login Required</h1>
            <p className="text-gray-600 text-lg">
              You need to log in to read the latest posts. Join the conversation!
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-2 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Container>
        <h2 className="text-4xl font-extrabold text-center text-gray-200 mb-10">
          📰 Latest Posts
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 transition-transform duration-200 hover:scale-105"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;

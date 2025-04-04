import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await appwriteService.getPosts([]);
        if (response) {
          setPosts(response.documents);
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full py-2 bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen">
      <Container>
        <h2 className="text-4xl font-extrabold text-center text-gray-200 mb-10 drop-shadow-sm">
          📝 Explore All Posts
        </h2>

        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <div key={post.$id} className='p-2'>
                <PostCard {...post} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-gray-500 mt-10 animate-pulse">
            No posts available yet. Stay tuned!
          </p>
        )}
      </Container>
    </div>
  );
}

export default AllPosts;

import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  return post ? (
    <div className="bg-gradient-to-br from-green-50 to-blue-100 min-h-screen py-2">
      <Container>
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            ✏️ Edit Your Post
          </h2>
          <PostForm post={post} />
        </div>
      </Container>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-xl text-gray-600 animate-pulse">Loading post...</p>
    </div>
  );
}

export default EditPost;

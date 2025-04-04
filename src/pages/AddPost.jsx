import React from 'react';
import { Container, PostForm } from '../components';

function AddPost() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 py-2 px-4 flex items-center justify-center">
      <Container>
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-3xl transition-all duration-300 hover:shadow-blue-200">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">
            ✏️ Create a New Post
          </h2>
          <div className="animate-fade-in-up">
            <PostForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPost;

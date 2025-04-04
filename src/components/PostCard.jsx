import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} aria-label={`Read post titled ${title}`}>
      <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
        <div className="h-48 w-full overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;

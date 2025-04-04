import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-2 bg-gray-50 min-h-screen">
      <Container>
        <div className="w-full mb-10">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="w-full max-h-[500px] object-cover"
            />
            {isAuthor && (
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button bgColor="bg-green-600 hover:bg-green-700" className="shadow">
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-600 hover:bg-red-700"
                  onClick={deletePost}
                  className="shadow"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{post.title}</h1>
        </div>

        <div className="prose prose-lg max-w-none text-gray-800">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : null;
}

import { Link, useParams } from "react-router-dom";
import { ButtonBack } from "../components/ui";
import { Author, Categories } from "../components/Posts/Components";
import { useApiRequest } from "../hooks/index";
import { getPost } from "../services/post";
import HTMLReactParser from "html-react-parser";
import { useAuth } from "../context/AuthProvider";
import { FaEdit } from "react-icons/fa";
import DetailPostSkeleton from "./skeleton/DetailPostSkeleton";
import { BACKEND_URL } from "../config";
import { useEffect } from "react";

import AlertModal from "../components/Modals/AlertModal";

const DetailPost = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { makeRequest, loading, response: post } = useApiRequest(getPost);

  useEffect(() => {
    makeRequest(id);
  }, [id]);

  if (loading || post === null) {
    return <DetailPostSkeleton />;
  }

  return (
    <>
      <div className="max-w-4xl mx-3 md:mx-auto  space-y-5">
        <div className="flex items-center justify-between">
          <div className=" flex items-center ">
            <ButtonBack />
            {user && user._id === post.author_id._id && (
              <div className="flex gap-1 ml-2">
                <AlertModal postId={id} />
                <Link
                  to={`/postEdit/${post?._id}`}
                  className="bg-primary px-2 py-1 rounded-md "
                >
                  <div className="flex items-center justify-center text-white space-x-1">
                    <FaEdit size={20} />
                    <span className=" hidden md:block  text-sm">
                      Edit this Post
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="space-x-2">
            <Categories categories={post?.category} />
          </div>
        </div>
        <h1 className="h1">{post?.title}</h1>
        <div className="flex items-center justify-between">
          <Author post={post} />
        </div>
        <img
          src={post.photo.secure_url}
          alt=""
          className="max-h-[600px] w-full bg-cover bg-center"
        />
        <div> {HTMLReactParser(post?.content)} </div>
      </div>
    </>
  );
};

export default DetailPost;

import React, { useEffect } from "react";
import { getUserPosts } from "../services/post";
import { useApiRequest } from "../hooks";
import { CardPost, CardSkeletonPost } from "../components/Posts/Components";

export const MyPosts = () => {
  const { error, loading, response, makeRequest } = useApiRequest(getUserPosts);

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <>
      {loading ? (
        <CardSkeletonPost count={10} />
      ) : (
        <CardPost posts={response} />
      )}
    </>
  );
};

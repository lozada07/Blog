import React, { useEffect, useRef, useState } from "react";
import { getAllPosts } from "../../services/post";
import useApiRequest from "../../hooks/useApiRequest";
import {
  CardPost,
  CardPostRecent,
  CardSkeletonPost,
  CardSkeletonPostRecent,
} from "./Components";
import { categoriesPost } from "../../constans/category";

const CardList = () => {
  const { error, loading, response, makeRequest } = useApiRequest(getAllPosts);

  const valor = localStorage.getItem("valor");
  const postsRecent = response?.slice(0, 2);
  const posts = response?.slice(2);
  const [query, setQuery] = useState(valor);

 useEffect(() => {
    if (valor === null) {
      makeRequest()
    }
    makeRequest(query);
  }, [query]);

  const handleOnclickQuery = (category) => () => {
    setQuery(category);
    localStorage.setItem("valor", category);
  };
  // console.log(posts.length);

  return (
    <>
      {loading ? (
        <>
          <CardSkeletonPostRecent count={2} />
          <CardSkeletonPost count={6} />
        </>
      ) : (
        <>
          <div className="flex justify-between mb-14 ">
            <h1 className=" text-xl text-neutral-600 font-semibold">
              Post Recent
            </h1>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {["", ...categoriesPost].map((category) => (
                <span
                  key={category}
                  onClick={handleOnclickQuery(category)}
                  className={`${
                    query === category ? "opacity-60" : "opacity-100"
                  } px-2 sm:px-3 py-1  rounded-full text-[12px] sm:text-sm font-semibold 
           flex-wrap  text-primary cursor-pointer bg-green-100`}
                >
                  {/* {console.log(category)} */}
                  {console.log(query === category)}
                  {category === "" ? "All Posts" : category}
                </span>
              ))}
            </div>
          </div>
          <CardPostRecent postRecent={postsRecent} />
          {posts?.length > 0 && <CardPost posts={posts} />}
        </>
      )}
    </>
  );
};

export default CardList;

import React from "react";
import AuthorSkeleton from "../../components/Posts/Components/skeleton/AuthorSkeleton";

const DetailPostSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-5 animate-pulse">
      <div className="flex items-center justify-between">
        <div className=" flex items-center h-4 w-56 bg-gray-200 rounded-lg "></div>
        <div className="space-x-2 h-4 w-56 bg-gray-200 rounded-lg"></div>
      </div>
      <h1 className="  h-4 bg-gray-200 rounded-lg"></h1>
      <div className="flex items-center justify-between">
        <AuthorSkeleton />
      </div>
      <div className="bg-gray-200  h-64 w-full"></div>
      <div className="  h-10  bg-gray-200 rounded-lg"> </div>
    </div>
  );
};

export default DetailPostSkeleton;

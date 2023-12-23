import React from "react";

const AuthorSkeleton = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-9 w-9 bg-gray-200 rounded-full"></div>
      <div className="flex flex-col space-y-2">
        <p className=" bg-gray-200  h-2 w-20 rounded-lg"></p>
        <span className="bg-gray-200 h-2 w-full rounded-lg"></span>
      </div>
    </div>
  );
};

export default AuthorSkeleton;

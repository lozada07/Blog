import React from "react";
const colorCategory = {
  Sports: "bg-red-300 text-red-800  ",
  Technology: "bg-blue-300 text-blue-800 ",
  Entertainment: "bg-purple-300 text-purple-800 ",
};

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-1 sm:gap-2">
      {categories?.map((category) => (
        <span
          key={category}
          className={`${colorCategory[category]} px-2 py-1 rounded-md text-[10px] sm:text-[12px] font-semibold 
         uppercase shadow-xl flex-wrap `}
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default Categories;

import { Link } from "react-router-dom";
import { categoriesPost } from "../../constans/category";
import Author from "../Posts/Components/Author";

const CardSearch = ({ posts }) => {
  console.log("Entre acá");
  return (
    <>
      {posts.map((post) => (
        <Link to={`/post/${post._id}`}  key={post._id}>
          <div className="border-b  border-gray-300 hover:bg-gray-50 px-4 py-2 w-full flex justify-between items-center">
            <div className="space-y-1.5 max-w-[250px] ">
              <h1 className="text-sm line-clamp-1">{post.title}</h1>
              <div className=" flex gap-1">
                {post.category.map((category) => (
                  <span
                    key={category}
                    className={` px-1 sm:px-3 py-1  rounded-full text-[11px]  font-semibold 
flex-wrap bg-green-100 text-primary cursor-pointer `}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <Author post={post} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default CardSearch;

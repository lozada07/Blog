import { Link } from "react-router-dom";
import { BACKEND_URL } from "../../../config";
import Author from "./Author";
import Categories from "./Categories";

const CardPostRecent = ({ postRecent }) => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 mx-3 lg:mx-0 gap-8 mb-16">
      {postRecent?.map((post) => (
        <Link key={post._id} to={`/post/${post._id}`}>
          <div className=" flex  flex-col lg:flex-row space-x-3 rounded-md duration-300  lg:h-auto  pb-4  lg:pb-0   overflow-hidden hover:shadow-black/40 hover:shadow-2xl">
            <img
              src={post.photo.secure_url}
              alt=""
              className="bg-no-repeat bg-cover bg-center rounded-md h-60 lg:w-72 lg:h-72 w-full"
            />
            <div className="flex flex-col justify-center mt-4 space-y-4 lg:pr-2 pb-1">
              <div className="space-y-3  ">
                <Categories categories={post.category} />
                <h1 className=" text-xl line-clamp-2 font-semibold text-wrap text-neutral-700 ">
                  {post.title}
                </h1>
                <p className=" text-sm line-clamp-3    text-neutral-900  font-medium">
                  {post.content.replace(/<[^>]*>/g, "")}
                </p>
              </div>

              <Author post={post} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardPostRecent;

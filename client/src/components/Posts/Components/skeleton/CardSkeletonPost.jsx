import AuthorSkeleton from "./AuthorSkeleton";

const CardSkeletonPost = ({ count }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 md:gap-6 m-3 lg:mt-10 lg:m-0">
      {[...Array(count).keys()].map((_, index) => (
        <div
          key={index}
          className="flex md:h-[500px] overflow-hidden  flex-col space-y-4 pb-4 rounded-md duration-300
          hover:shadow-black/40 hover:shadow-2xl animate-pulse"
        >
          <div className="bg-no-repeat bg-cover bg-center rounded-md h-64 w-full  bg-gray-200 "></div>
          <div className="flex flex-col px-2 space-y-4">
            <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-6 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-16 bg-gray-200 rounded-lg w-full"></div>
            <AuthorSkeleton />
          </div>
        </div>
      ))}

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xs:mt-8 gap-8 md:gap-6 xs:m-3 lg:mt-10 lg:m-0">
        {posts?.map((post) => (
          <Link key={post._id} to={`/post/${post._id}`}>
            <div
              className=" flex md:h-[500px] overflow-hidden  flex-col space-y-4 pb-4 rounded-md duration-300
    hover:shadow-black/40 hover:shadow-2xl "
            >
              <img
                src={`${BACKEND_URL}/public/${post.photo}`}
                alt=""
                className="bg-no-repeat bg-cover bg-center rounded-md h-64 w-full   "
              />
              <div className="flex flex-col px-2 space-y-4">
                <Categories categories={post.category} />

                <div className="flex flex-col space-y-2 justify-center w-full ">
                  <h1 className="text-xl line-clamp-2 font-semibold text-neutral-700">
                    {" "}
                    {post.title}
                  </h1>
                  <p className="  text-sm text-left line-clamp-3 break-all  text-neutral-900 font-medium ">
                    {post.content.replace(/<[^>]*>/g, "")}
                  </p>
                </div>
                <Author post={post} />
              </div>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};

export default CardSkeletonPost;

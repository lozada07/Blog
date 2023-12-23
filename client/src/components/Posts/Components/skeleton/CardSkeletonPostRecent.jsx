import AuthorSkeleton from "./AuthorSkeleton";

const CardSkeletonPostRecent = ({ count }) => {
  return (
    <>
      <div className="flex justify-between mb-14 ">
        <h1 className="h-6 w-28 bg-gray-200 rounded-md "></h1>
        <div className="flex flex-wrap gap-1 ">
          <div className="h-6 w-16 sm:w-20 bg-gray-200 rounded-md "></div>
          <div className="h-6 w-16 sm:w-20 bg-gray-200 rounded-md "></div>
          <div className="h-6 w-16 sm:w-20 bg-gray-200 rounded-md "></div>
          <div className="h-6 w-16 sm:w-20 bg-gray-200 rounded-md "></div>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 mx-3 lg:mx-0 gap-8">
        {[...Array(count).keys()].map((_, index) => (
          <div
            key={index}
            className="  flex  flex-col lg:flex-row space-x-3 rounded-md duration-300  animate-pulse  pb-4  lg:pb-0  min-w-max-[20px] overflow-hidden hover:shadow-black/40 hover:shadow-2xl"
          >
            <div className=" bg-gray-200 rounded-md h-60 w-full lg:w-72 lg:h-72"></div>
            <div className="flex flex-col justify-center mt-4 space-y-4 lg:pr-2 pb-1">
              <div className="space-y-4 mt-0 flex flex-col  justify-between  ">
                <div className="bg-gray-200 w-72 h-8 rounded-lg"></div>
                <h1 className=" bg-gray-200 w-72 h-6 rounded-lg"></h1>
                <p className=" bg-gray-200 w-72 h-16 rounded-lg"></p>
              </div>

              <AuthorSkeleton />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardSkeletonPostRecent;

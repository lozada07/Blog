import { BACKEND_URL } from "../../../config";
import FormatFecha from "../../FormatFecha";
import avatar from "../../../assets/dd.png";

const sizeClasses = {
  xs: "text-xs",
};

const Author = ({ post, size }) => {
  {
    console.log(post);
  }
  return (
    <div className="flex items-center space-x-2">
      <img
        src={` ${
          post?.author_id?.photo
            ? `${BACKEND_URL}/public/photoUsers/${post?.author_id?.photo}`
            : avatar
        } `}
        className="h-9 w-9 rounded-full"
      />
      <div className="flex flex-col space-y-[0.5px]">
        <p className="text-sm text-neutral-700 font-semibold">
          {post?.author_id?.username}
        </p>
        <span
          className={`${
            size ? `${sizeClasses[size]}` : "text-sm"
          }  text-neutral-500`}
        >
          <FormatFecha fechaISO={post?.createdAt} />
        </span>
      </div>
    </div>
  );
};

export default Author;

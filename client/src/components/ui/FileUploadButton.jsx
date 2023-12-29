import React, { useRef } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { BACKEND_URL } from "../../config";
import { Link } from "react-router-dom";

const FileUploadButton = ({ register, value, setValue, watch }) => {
  const onSubmitFile = () => {
    setValue("photo", "");
  };

  return (
    <>
      {value && value.length > 0 ? (
        <div className="relative flex justify-center bg-gray-100 border-2  border-gray-300 border-dashed rounded-lg  ">
          <img
            src={
              value instanceof FileList ? URL.createObjectURL(value[0]) : value
            }
            className="text-center max-h-[400px]"
          />
          <Link
            onClick={onSubmitFile}
            className="absolute right-3 top-14 bg-gray-600  rounded-full  group"
          >
            <AiOutlineClose
              className="absolute -top-12 -right-2 text-neutral-600 transition  group-hover:text-neutral-400"
              size={22}
            />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full border-2  border-gray-300 hover:bg-gray-100 border-dashed rounded-lg h-40  bg-gray-50 relative">
          <IoCloudUploadSharp size={40} className="text-gray-800" />
          <p className="mb-2 text-sm text-gray-800">
            <span className="font-semibold">Click to upload image</span> or drag
            and drop
          </p>
          <input
            type="file"
            name="photo"
            className="absolute w-full h-full opacity-0  cursor-pointer"
            {...register("photo")}
          />
        </div>
      )}
    </>
  );
};

export default FileUploadButton;

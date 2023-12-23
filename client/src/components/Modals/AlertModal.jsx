import React, { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../constans/animates.js";
import { MdDelete } from "react-icons/md";
import { useApiRequest } from "../../hooks";
import { deletePost } from "../../services/post";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AlertModal = ({ postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { makeRequest, response } = useApiRequest(deletePost);
  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    try {
      toast.success("Task deleted ");
      await makeRequest(postId);
      navigate("/");
    } catch (error) {}
  };

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-600 px-2 py-1 rounded-md ml-1"
      >
        <div className="flex items-center text-white space-x-1">
          <MdDelete size={20} />
          <span className="hidden md:block text-sm">Delete this Post</span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            onClick={handleCloseModal}
            className="fixed flex inset-0 z-10 bg-black/20 backdrop-blur-md justify-center  items-center"
          >
            <motion.div
              variants={fadeIn("open")}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 0.17, ease: "easeInOut" }}
              className=" flex flex-col space-y-3 items-center justify-center bg-white  w-[300px] px-3 py-3 overflow-hidden  rounded-lg"
            >
              <div className="bg-yellow-200 p-2  rounded-full text-yellow-500">
                <TiWarningOutline size={40} />
              </div>
              <h2 className="text-neutral-800 font-semibold ">Delete Post</h2>
              <p className="text-sm text-center text-neutral-700">
                Are you sure you want to delete this account?
              </p>
              <button
                onClick={handleOnSubmit}
                className="bg-primary px-2 py-1 rounded-md w-full text-white hover:bg-green-600 transition duration-300 mt-2 "
              >
                Delete
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-white px-2 py-1 border border-gray-200 rounded-md w-full  text-neutral-800 hover:bg-slate-100 transition duration-300 "
              >
                Cancel
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AlertModal;

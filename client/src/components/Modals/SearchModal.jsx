import React, { useState } from "react";
import { TiWarningOutline } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../../constans/animates.js";
import { useApiRequest } from "../../hooks";
import { getAllPosts } from "../../services/post";
import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import Author from "../Posts/Components/Author.jsx";
import { categoriesPost } from "../../constans/category.jsx";
import CardSearch from "../Search/CardSearch.jsx";
import { set } from "date-fns";

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const stopPropagation = (e) => e.stopPropagation();
  const { makeRequest, loading, response } = useApiRequest(getAllPosts);
  const [data, setData] = useState(false);

  const handleChange = async (e) => {
    const value = e.target.value;
    if (value != "") {
      setData(true);
      await makeRequest(e.target.value);
    } else {
      setData(false);
    }
  };

  

  const handleCloseModal = () => {
    setData(false);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <IoIosSearch size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            onClick={handleCloseModal}
            className="fixed flex  inset-0 z-20  bg-black/20 backdrop-blur-md  justify-center items-start "
          >
            <button className=" absolute right-4 top-4 bg-white p-1 rounded-full shadow-2xl group ">
              <AiOutlineClose
                className=" -top-12 -right-2 text-neutral-400 transition group-hover:text-neutral-500"
                size={22}
              />
            </button>
            <motion.div
              onClick={stopPropagation}
              variants={fadeIn("open")}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 0.26, ease: "easeOut" }}
              className="w-[500px] relative h-auto mt-20"
            >
              <div className="absolute right-2 top-3.5">
                <IoIosSearch size={27} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Find Post.."
                autoFocus
                onChange={handleChange}
                className="w-full rounded-t-md p-4 focus:outline-none shadow-2xl caret-gray-400 text-sm placeholder:text-neutral-500 "
              />
              {data && (
                <motion.div
                  variants={fadeIn("down", 0, 5)}
                  transition={{ duration: 0.2 }}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="w-full bg-white  rounded-b-md shadow-xl"
                >
                  {response?.length > 0 ? (
                    response.map((post) => (
                      <Link
                        key={post._id}
                        to={`/post/${post._id}`}
                        onClick={handleCloseModal}
                      >
                        <div className="border-t  border-gray-300 hover:bg-gray-50 px-4 py-2 w-full flex justify-between items-center">
                          <div className="space-y-1.5 max-w-[250px] ">
                            <h1 className="text-sm line-clamp-1">
                              {post.title}
                            </h1>
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
                          <div className=" w-[140px]">
                            <Author post={post} size="xs" />
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <h1 className="text-center text-neutral-700 font-semibold py-4">
                      No results found
                    </h1>
                  )}
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchModal;

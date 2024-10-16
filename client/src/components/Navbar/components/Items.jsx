import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthModal } from "../../../hooks";
import avatar from "../../../assets/dd.png";
import { motion } from "framer-motion";
import { useAuth } from "../../../context/AuthProvider";
import SearchModal from "../../Modals/SearchModal";
import AccountUser from "../../User/AccountUser";
import { TbLogout } from "react-icons/tb";
import { MdOutlineArticle } from "react-icons/md";
import { BACKEND_URL } from "../../../config";

const Items = () => {
  const loginModal = useAuthModal();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout: logoutOriginal, user } = useAuth();
  const node = useRef();
  const buttonNode = useRef();

  const toggleModal = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const logout = () => {
    logoutOriginal();
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verificar si el evento del clic se originó en el botón
      if (
        node.current?.contains(event.target) ||
        buttonNode.current?.contains(event.target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="mr-2 ">
        <SearchModal />
      </div>
      {!isAuthenticated ? (
        <div className="flex flex-row items-center justify-center gap-3">
          <Link
            onClick={loginModal.onOpenLoginModal}
            className="transitionButton text-sm "
          >
            Login
          </Link>
          <Link
            onClick={loginModal.onOpenRegisterModal}
            className="transitionButton  flex justify-center bg-primary py-2  px-3 rounded-lg text-white text-sm text-medium"
          >
            Sign up
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <Link to="/post">
            <button className="px-2 py-2 mr-2 bg-primary rounded-md text-white text-sm font-medium transitionButton ">
              New post
            </button>
          </Link>
          <button
            ref={buttonNode}
            onClick={() => {
              toggleModal();
            }}
            className={`${
              isOpen ? "opacity-75" : "opacity-100"
            } rounded-full  `}
          >
            {console.log(user.photo)}
            <img
              src={
                Object.keys(user.photo).length > 0
                  ? user.photo.secure_url
                  : avatar
              }
              className="h-9 w-9 rounded-full "
            />
          </button>

          {isOpen && (
            <div className="relative ">
              <motion.div
                ref={node} // Asignar la referencia aquí
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transform={{ transform: 0.6 }}
                className="absolute right-0 z-10 mt-6 w-48  rounded-md bg-white py-1 shadow-lg ring-2
                    ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="text-sm py-2 px-5 font-semibold text-neutral-600 mb-2  break-all ">
                  {user.email}
                </div>
                <AccountUser />
                <Link
                  to="/MyPosts"
                  className="flex space-x-2 px-4 w-full items-center py-2 text-sm text-gray-700 hover:text-gray-600 hover:bg-gray-100"
                >
                  <MdOutlineArticle size={24} />
                  <span>My Posts</span>
                </Link>
                <Link
                  onClick={logout}
                  className="flex space-x-2 px-4 w-full items-center py-2 text-sm text-gray-700 hover:text-gray-600 hover:bg-gray-100"
                >
                  <TbLogout size={24} />
                  <span>Logout</span>
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Items;

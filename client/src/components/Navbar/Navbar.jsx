import { useState } from "react";
import Items from "./components/Items";
import Logo from "./components/Logo";
import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./components/NavLinks";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { fadeIn } from "../../constans/animates";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className=" fixed  top-0 left-0 right-0 bg-white px-8 md:px-16  z-10 shadow-lg py-3">
      <div className=" container mx-auto">
        <div className="flex items-center justify-between">
          <div className="order-2 md:order-1">
            <Logo />
          </div>
          <div className="hidden  md:flex order-2 items-center justify-center space-x-6 ">
            <NavLinks />
          </div>
          <div className="order-3 md:order-2 flex items-center justify-center space-x-3 ">
            <Items />
          </div>
          <div className="order-1 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Link>
              <RxHamburgerMenu size={22} className="text-neutral-700" />
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {isOpen && (
            <div className="md:hidden absolute inset-0 flex z-10 justify-center h-screen">
              <motion.div
                variants={fadeIn("right", 600, 0)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 0.3 }}
                className="flex flex-col  pt-14 bg-white space-y-7 w-full h-screen drop-shadow-xl  "
              >
                <div
                  className="flex flex-col space-y-5 items-center text-xl"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <NavLinks />
                </div>
                <button
                  className=" w-full group"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <AiOutlineClose
                    className="absolute  left-3 top-3 text-neutral-400 transition  group-hover:text-neutral-500 "
                    size={26}
                  />
                </button>

                {/* <div className=" flex flex-col items-center w-full justify-center space-y-3  ">
                  <Items />
                </div> */}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

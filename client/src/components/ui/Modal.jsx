import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence} from "framer-motion";
import { fadeIn } from "../../constans/animates.js";

const Modal = ({ isOpen, onClose, title, body, footer }) => {
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-10 overflow-hidden backdrop-blur-[1.5px] bg-black/40 flex items-center justify-center"
        >
          <motion.div
            onClick={stopPropagation}
            variants={fadeIn("up", 0, 600)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col space-y-2 justify-center bg-white drop-shadow-2xl max-w-sm overflow-hidden rounded-md px-5 py-4">
              <h1 className="h1 text-center">{title}</h1>
              <button onClick={onClose} className="relative w-full group">
                <AiOutlineClose
                  className="absolute -top-12 -right-2 text-neutral-400 transition group-hover:text-neutral-500"
                  size={22}
                />
              </button>

              {/* Body */}
              {body}
              {/* Footer */}
              {footer}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

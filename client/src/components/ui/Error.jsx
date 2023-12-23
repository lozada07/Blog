import { motion } from "framer-motion";
import React from "react";
const Error = ({ error }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -70 }}
      transition={{ ease: "easeInOut" }}
      className="text-red-700 bg-red-200 rounded-sm p-2 w-full"
    >
      {error}
    </motion.div>
  );
};

export default Error;

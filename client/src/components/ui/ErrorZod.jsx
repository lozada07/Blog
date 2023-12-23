import { motion } from "framer-motion";
import React from "react";

const ErrorZod = ({ message }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      exit={{ opacity: 0, y: 70 }}
      className="text-red-600 text-sm"
    >
      {message}
    </motion.p>
  );
};

export default ErrorZod;

import React from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

const Preloader = ({ isLoading }) => {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0, scale: isLoading ? 1 : 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.8, ease: "easeInOut" },
      }} // ✅ Exit effect
    >
      <motion.h1
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={{ y: 50, opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 1.2,
          transition: { duration: 0.6, ease: "easeInOut" },
        }} // ✅ Smooth exit effect
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Gostišče <span className="break">Pod Podom</span>
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;

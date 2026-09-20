import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

function HeroSite({ title, imageLarge, span, className }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`hero-container${className ? ` ${className}` : ""}`}
      style={{ backgroundImage: `url(${imageLarge})` }}
    >
      <div className="hero-image-wrapper">
        <motion.img
          className="hero-image"
          src={imageLarge}
          alt={title}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="hero-title"
        initial={{ y: 50, opacity: 0.8 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h1>
          {title} <span className="break">{span}</span>
        </h1>
      </motion.div>
    </motion.section>
  );
}

export default HeroSite;

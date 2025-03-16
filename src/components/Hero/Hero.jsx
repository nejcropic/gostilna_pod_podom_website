import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = ({
  title,
  image,
  imageSmall,
  imageMedium,
  imageLarge,
  span,
  isLoading,
}) => {
  const [delayedAnimation, setDelayedAnimation] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setDelayedAnimation(true), 0);
    }
  }, [isLoading]);

  return (
    <motion.section
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: delayedAnimation ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="hero-image-wrapper">
        <motion.img
          className="hero-image"
          src={image}
          srcSet={`${imageSmall} 480w, ${imageMedium} 768w, ${imageLarge} 1920w`}
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1920px"
          alt={title}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={delayedAnimation ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="hero-title"
        initial={{ y: 50, opacity: 0 }}
        animate={delayedAnimation ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h1>
          {title} <span className="break">{span}</span>
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function HeroSite({
  title,
  imagePlaceholder, // ✅ Placeholder for fast loading
  imageSmall,
  imageMedium,
  imageLarge,
  span,
  className,
  isLoading, // ✅ Receives loading state from App.js
}) {
  const { t } = useTranslation("global");
  const [imageSrc, setImageSrc] = useState(imagePlaceholder); // ✅ Start with placeholder
  const [isLoaded, setIsLoaded] = useState(false);
  const [delayedAnimation, setDelayedAnimation] = useState(false); // ✅ Added delay for animations

  useEffect(() => {
    const img = new Image();
    img.src = imageLarge;
    img.onload = () => {
      setImageSrc(imageLarge);
      setIsLoaded(true);
    };
  }, [imageLarge]);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setDelayedAnimation(true), 0); // ✅ Add delay after preloader
    }
  }, [isLoading]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: delayedAnimation ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`hero-container${className ? ` ${className}` : ""}`}
      style={{ backgroundImage: `url(${imagePlaceholder})` }} // ✅ Background fallback
    >
      <div className="hero-image-wrapper">
        <motion.img
          className="hero-image"
          src={imageSrc} // ✅ Uses dynamic src
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
        initial={{ y: 50, opacity: 0.8 }}
        animate={delayedAnimation ? { y: 0, opacity: 1 } : {}}
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

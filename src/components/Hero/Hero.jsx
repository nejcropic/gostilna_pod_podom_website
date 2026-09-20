import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

import HeroVideo from "../../videos/hero_video.mp4";

const HERO_TITLE_DELAY_SECONDS = 6.5;

const Hero = ({ title, imageLarge, span }) => {
  return (
    <motion.section
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      aria-labelledby="home-hero-title"
    >
      <div className="hero-image-wrapper">
        <video
          className="hero-image"
          src={HeroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={imageLarge}
          aria-label="Video predstavitev Gostišča Pod Podom"
        />
      </div>

      <motion.div
        className="hero-title"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: HERO_TITLE_DELAY_SECONDS,
          ease: "easeOut",
        }}
      >
        <h1 id="home-hero-title">
          {title} <span className="break">{span}</span>
        </h1>
      </motion.div>
    </motion.section>
  );
};

export default Hero;

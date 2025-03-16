import React, { useState } from "react";
import "./SiteGallery.css";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../animations";

function SiteGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const closeLightbox = (e) => {
    if (e.target.classList.contains("lightbox")) {
      setSelectedIndex(null);
    }
  };

  return (
    <div className="site-gallery">
      {images.map((image, index) => (
        <section key={index} onClick={() => setSelectedIndex(index)}>
          <motion.img
            src={image}
            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            alt={`Gallery ${index + 1}`}
          />
        </section>
      ))}

      {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="close-button"
            onClick={() => setSelectedIndex(null)}
          >
            &times;
          </button>
          <button className="prev-button" onClick={handlePrev}>
            &#10094;
          </button>
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="lightbox-image"
          />
          <button className="next-button" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default SiteGallery;

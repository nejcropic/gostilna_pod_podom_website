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
        <section key={image} onClick={() => setSelectedIndex(index)}>
          <motion.img
            src={image}
            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            alt={`Fotografija ponudbe ${index + 1}`}
            loading="lazy"
            decoding="async"
          />
        </section>
      ))}

      {selectedIndex !== null && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galerija fotografij"
        >
          <button
            type="button"
            className="close-button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Zapri galerijo"
          >
            &times;
          </button>
          <button type="button" className="prev-button" onClick={handlePrev} aria-label="Prejšnja fotografija">
            &#10094;
          </button>
          <img
            src={images[selectedIndex]}
            alt={`Fotografija ponudbe ${selectedIndex + 1}`}
            className="lightbox-image"
          />
          <button type="button" className="next-button" onClick={handleNext} aria-label="Naslednja fotografija">
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default SiteGallery;

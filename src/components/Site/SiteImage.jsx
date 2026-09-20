import React, { useState } from "react";
import "./SiteGallery.css";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

function SiteImage({ image, alt = "Gostišče Pod Podom" }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeLightbox = (e) => {
    if (e.target.classList.contains("lightbox")) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <section onClick={() => setIsOpen(true)}>
        <motion.img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </section>
      {isOpen && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Povečana fotografija"
        >
          <button
            type="button"
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Zapri fotografijo"
          >
            &times;
          </button>
          <img src={image} alt={alt} className="lightbox-image" />
        </div>
      )}
    </>
  );
}

export default SiteImage;

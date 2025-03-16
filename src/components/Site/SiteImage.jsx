import React, { useState } from "react";
import "./SiteGallery.css";
import { motion } from "framer-motion";
import { textUp, textLeftToCenter, fadeIn } from "../animations";

function SiteImage({ image }) {
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
          alt="Site"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </section>
      {isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          <img src={image} alt="Enlarged view" className="lightbox-image" />
        </div>
      )}
    </>
  );
}

export default SiteImage;

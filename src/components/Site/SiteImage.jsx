import React, { useState } from "react";
import "./SiteGallery.css";

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
        <img src={image} alt="Site" />
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

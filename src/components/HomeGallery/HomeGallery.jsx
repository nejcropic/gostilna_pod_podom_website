import React, { useState } from "react";
import "./HomeGallery.css";

function HomeGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="home-gallery">
      {images.map((image, index) => (
        <section key={index} onClick={() => setSelectedIndex(index)}>
          <img src={image} alt={`Gallery ${index + 1}`} />
        </section>
      ))}

      {selectedIndex !== null && (
        <div className="lightbox">
          <button className="close-button" onClick={closeLightbox}>
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

export default HomeGallery;

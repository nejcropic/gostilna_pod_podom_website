import React, { useState, useEffect } from "react";
import "./Galerija.css";
import GalerijaDropdown from "./GalerijaDropdown";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../animations";

// Manually define the groups
const groups = [
  { id: "all", key: "galerija.all" },
  { id: "okolica", key: "galerija.okolica" },
  { id: "sladice", key: "galerija.sladice" },
  { id: "prostori", key: "galerija.prostori" },
  { id: "pice", key: "galerija.pice" },
  { id: "ostale", key: "galerija.ostale" },
];

// Import all images dynamically
const importAll = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    name: key.match(/[^/]+$/)[0], // Extract filename
  }));
const images = importAll(require.context("../../gallery", false, /\.(webp)$/));

function GalerijaMain() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("all");

  // Shuffle function
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Apply filtering
  useEffect(() => {
    if (selectedGroup === "all") {
      setFilteredImages(shuffleArray(images));
    } else {
      setFilteredImages(
        shuffleArray(
          images.filter((img) => img.name.startsWith(selectedGroup)),
        ),
      );
    }
  }, [selectedGroup]);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  const closeLightbox = (e) => {
    if (e.target.classList.contains("lightbox")) {
      setSelectedIndex(null);
    }
  };

  return (
    <div className="gallery-wrapper">
      {/* Use Custom Dropdown */}
      <GalerijaDropdown
        options={groups}
        selectedValue={selectedGroup}
        onChange={setSelectedGroup}
      />

      {/* Gallery images */}
      <div className="home-gallery">
        {filteredImages.map((image, index) => (
          <section key={image.name} onClick={() => setSelectedIndex(index)}>
            <motion.img
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              src={image.src}
              alt={`Fotografija Gostišča Pod Podom ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </section>
        ))}
      </div>

      {/* Lightbox view */}
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
          <button
            type="button"
            className="prev-button"
            onClick={handlePrev}
            aria-label="Prejšnja fotografija"
          >
            &#10094;
          </button>
          <img
            src={filteredImages[selectedIndex].src}
            alt={`Fotografija Gostišča Pod Podom ${selectedIndex + 1}`}
            className="lightbox-image"
          />
          <button
            type="button"
            className="next-button"
            onClick={handleNext}
            aria-label="Naslednja fotografija"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}

export default GalerijaMain;

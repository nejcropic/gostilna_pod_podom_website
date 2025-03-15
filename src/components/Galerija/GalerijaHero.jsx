import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Galerija.css";
import GalerijaDropdown from "./GalerijaDropdown"; // Import the dropdown component

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
const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

function GalerijaMain() {
  const { t } = useTranslation("global");
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
        shuffleArray(images.filter((img) => img.name.startsWith(selectedGroup)))
      );
    }
  }, [selectedGroup]);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredImages.length) % filteredImages.length
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
          <section key={index} onClick={() => setSelectedIndex(index)}>
            <img loading="lazy" src={image.src} alt={`Gallery ${index + 1}`} />
          </section>
        ))}
      </div>

      {/* Lightbox view */}
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
            src={filteredImages[selectedIndex].src}
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

export default GalerijaMain;

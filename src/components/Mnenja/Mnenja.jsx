import React, { useState, useEffect } from "react";
import "./Mnenja.css";
import { MnenjaOptions } from "./MnenjaItems";

function Mnenja() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MnenjaOptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % MnenjaOptions.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + MnenjaOptions.length) % MnenjaOptions.length
    );
  };

  return (
    <div className="mnenja-wrapper">
      <div className="mnenja-title">
        <h3>Mnenja strank</h3>
      </div>

      <div className="mnenja-container">
        <button className="prev-button" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="mnenja-card">
          <p className="mnenja-text">{MnenjaOptions[currentIndex].opinion}</p>
          <h3 className="mnenja-name">- {MnenjaOptions[currentIndex].name}</h3>
        </div>
        <button className="next-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Mnenja;

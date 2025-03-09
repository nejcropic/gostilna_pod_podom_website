import React, { useState, useEffect } from "react";
import "./Mnenja.css";
import { MnenjaOptions } from "./MnenjaItems";

function Mnenja() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile when screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-change opinion every 3 seconds (only on mobile)
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % MnenjaOptions.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

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
      <hr />
      <div className="mnenja-container">
        {!isMobile && (
          <button className="prev-button" onClick={handlePrev}>
            &#10094;
          </button>
        )}

        {/* Display 3 cards on desktop, 1 on mobile */}
        {isMobile ? (
          <div className="mnenja-card">
            <p className="mnenja-text">{MnenjaOptions[currentIndex].opinion}</p>
            <h3 className="mnenja-name">
              - {MnenjaOptions[currentIndex].name}
            </h3>
          </div>
        ) : (
          MnenjaOptions.slice(currentIndex, currentIndex + 3).map(
            (item, index) => (
              <div className="mnenja-card" key={index}>
                <p className="mnenja-text">{item.opinion}</p>
                <h3 className="mnenja-name">- {item.name}</h3>
              </div>
            )
          )
        )}

        {!isMobile && (
          <button className="next-button" onClick={handleNext}>
            &#10095;
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}

export default Mnenja;

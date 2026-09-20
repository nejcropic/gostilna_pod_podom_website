import React, { useState, useEffect } from "react";
import "./Mnenja.css";
import { useTranslation } from "react-i18next";
import { MnenjaOptions } from "./MnenjaItems";

function Mnenja() {
  const { t } = useTranslation("global");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 767px)").matches
  );

  // Update isMobile when screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-change opinion every 3 seconds (only on mobile)
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % MnenjaOptions.length);
      }, 8000);
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
        <h3>{t("home.mnenja")}</h3>
      </div>
      <hr />
      <div className="mnenja-container">
        {!isMobile && (
          <button
            type="button"
            className="mnenja-prev-button"
            onClick={handlePrev}
            aria-label="Prejšnje mnenje"
          >
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
          [0, 1, 2].map((offset) => {
            const item = MnenjaOptions[(currentIndex + offset) % MnenjaOptions.length];
            return (
              <div className="mnenja-card" key={item.name}>
                <p className="mnenja-text">{item.opinion}</p>
                <h3 className="mnenja-name">- {item.name}</h3>
              </div>
            );
          })
        )}

        <button
          type="button"
          className="mnenja-next-button"
          onClick={handleNext}
          aria-label="Naslednje mnenje"
        >
          &#10095;
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Mnenja;

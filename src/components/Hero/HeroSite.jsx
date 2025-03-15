import React, { useEffect } from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function HeroSite({ title, image, span, className }) {
  const { t } = useTranslation("global");

  useEffect(() => {
    const handleScroll = () => {
      const background = document.querySelector(".hero-background");
      if (background) {
        let scrollPosition = window.scrollY;
        background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section className="hero-container">
        <div
          className={`hero-background${className ? ` ${className}` : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="hero-title herosite">
          <h1>
            {title}
            <span class="break"></span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default HeroSite;

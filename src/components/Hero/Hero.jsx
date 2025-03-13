import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero({ title, image, span, className }) {
  const { t } = useTranslation("global");

  return (
    <section className={`hero-container${className ? ` ${className}` : ""}`}>
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="hero-title">
        <h1>
          {title} <span className="break">{span}</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;

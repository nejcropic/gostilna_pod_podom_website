import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Hero({ title, image, span }) {
  const { t } = useTranslation("global");
  return (
    <>
      <section className="hero-container">
        <div
          className="hero-background"
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

export default Hero;

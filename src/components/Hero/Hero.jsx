import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import { Naslovnica } from "../..";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation("global");
  return (
    <>
      <section className="hero-container">
        <div className="hero-background"></div>
        <div className="hero-title">
          <h1>
            Gostišče <span class="break">Pod podom</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Hero;

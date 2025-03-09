import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import { Naslovnica } from "../..";
import { Link } from "react-router-dom";

function Hero() {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="hero-container">
        <img src={Naslovnica} alt="" />
        <div className="hero-title">
          <h1>
            Gostišče <span class="break">Pod podom</span>
          </h1>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  );
}

export default Hero;

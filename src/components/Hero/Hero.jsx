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
          <Link to="/galerija">
            <h2>{t("hero.galerija")}</h2>
          </Link>
          <Link to="/meni">
            <h2>{t("hero.meni")}</h2>
          </Link>
          <h1>
            Gostišče <span class="break">Pod podom</span>
          </h1>

          <Link to="/okolica">
            <h2>{t("hero.okolica")}</h2>
          </Link>
          <Link to="/lokacija">
            <h2>{t("hero.lokacija")}</h2>
          </Link>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  );
}

export default Hero;

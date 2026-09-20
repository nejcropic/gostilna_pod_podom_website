import React from "react";
import { useTranslation } from "react-i18next";
import "./MeniHero.css";

import PicaMeni from "../../meni/pice_picopek.webp";
import OstaleJedi from "../../meni/ostale_jedi_kalamari.webp";
import Sladice from "../../meni/sladice_panacota.webp";

export default function MeniHero({ onCategoryClick }) {
  const { t } = useTranslation("global");

  return (
    <section className="meni-hero-wrapper">
      <h2>
        {t("meniHero.title")} <i className="fa-regular fa-hand-pointer"></i>
      </h2>

      <div className="meni-hero-container">
        <button
          type="button"
          className="meni-hero-card"
          onClick={() => onCategoryClick("pice")}
        >
          <div className="meni-card-text">
            <h1>{t("meniHero.pice")}</h1>
          </div>
          <img src={PicaMeni} alt={t("meniHero.pice")} loading="lazy" />
        </button>

        <button
          type="button"
          className="meni-hero-card inverse"
          onClick={() => onCategoryClick("ostala_ponudba")}
        >
          <div className="meni-card-text">
            <h1>{t("meniHero.ostala")}</h1>
          </div>
          <img src={OstaleJedi} alt={t("meniHero.ostala")} loading="lazy" />
        </button>

        <button
          type="button"
          className="meni-hero-card"
          onClick={() => onCategoryClick("sladice")}
        >
          <div className="meni-card-text">
            <h1>{t("meniHero.sladice")}</h1>
          </div>
          <img src={Sladice} alt={t("meniHero.sladice")} loading="lazy" />
        </button>
      </div>
    </section>
  );
}

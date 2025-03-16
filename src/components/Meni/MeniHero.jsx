import React from "react";
import "./MeniHero.css";

import PicaMeni from "../../meni/pice_picopek.png";
import OstaleJedi from "../../meni/ostale_jedi_kalamari.png";
import Sladice from "../../meni/sladice_cokoladne.png";

export default function MeniHero({ onCategoryClick }) {
  return (
    <section className="meni-hero-wrapper">
      <h2>
        Izberi ponudbo <i class="fa-regular fa-hand-pointer"></i>
      </h2>
      <div className="meni-hero-container">
        <div className="meni-hero-card" onClick={() => onCategoryClick("pice")}>
          <div className="meni-card-text">
            <h1>Pice napolitana</h1>
          </div>
          <img src={PicaMeni} alt="Pica Meni" />
        </div>
        <div
          className="meni-hero-card inverse"
          onClick={() => onCategoryClick("ostala_ponudba")}
        >
          <div className="meni-card-text">
            <h1>Ostala ponudba</h1>
          </div>
          <img src={OstaleJedi} alt="Ostala Ponudba" />
        </div>
        <div
          className="meni-hero-card"
          onClick={() => onCategoryClick("sladice")}
        >
          <div className="meni-card-text">
            <h1>Sladice</h1>
          </div>
          <img src={Sladice} alt="Sladice" />
        </div>
      </div>
    </section>
  );
}

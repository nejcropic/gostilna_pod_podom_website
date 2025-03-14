import React from "react";
import "./MeniHero.css";

import PicaMeni from "../../icons/meni_pice.png";
import OstaleJedi from "../../icons/meni_ostala_ponudba.png";
import Sladice from "../../icons/meni_sladice.png";

export default function MeniHero({ onCategoryClick }) {
  return (
    <section className="meni-hero-wrapper">
      <div className="meni-hero-container">
        <h2>Izberi ponudbo</h2>
        <div className="meni-hero-card" onClick={() => onCategoryClick("pice")}>
          <div className="meni-card-text">
            <h1>Pice</h1>
            <p>Opis? Npr. pice napolitana, možnost pirine moke, blabla</p>
          </div>
          <img src={PicaMeni} alt="Pica Meni" />
        </div>
        <div
          className="meni-hero-card inverse"
          onClick={() => onCategoryClick("ostala_ponudba")}
        >
          <div className="meni-card-text">
            <h1>Ostala ponudba</h1>
            <p>Opis? Nudimo tudi ostale jedi, dunajc, kalamari.. </p>
          </div>
          <img src={OstaleJedi} alt="Ostala Ponudba" />
        </div>
        <div
          className="meni-hero-card"
          onClick={() => onCategoryClick("sladice")}
        >
          <div className="meni-card-text">
            <h1>Sladice</h1>
            <p>Sladice poleti..</p>
          </div>
          <img src={Sladice} alt="Sladice" />
        </div>
      </div>
    </section>
  );
}

import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import MeniHero from "../components/Meni/MeniHero";
import MeniFood from "../components/Meni/MeniFood";

import HeroSlika from "../images/naslovna1.jpg";

function Meni() {
  const { t } = useTranslation("global");
  const pice = t("pice", { returnObjects: true });
  const ostala_ponudba = t("ostala_ponudba", { returnObjects: true });
  const sladice = t("sladice", { returnObjects: true });
  const dodatki = t("dodatki", { returnObjects: true });

  const [selectedCategory, setSelectedCategory] = useState("pice");
  const menuRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const selectedData =
    selectedCategory === "pice"
      ? pice
      : selectedCategory === "ostala_ponudba"
      ? ostala_ponudba
      : sladice;

  return (
    <>
      <HeroSite title="Meni" image={HeroSlika} className="moveLeft" />
      {/* <div className="meni-hero-top">
        <h2>Meni</h2>
        <img src={MenuIcon} alt="Menu Icon" />
      </div> */}
      <MeniHero onCategoryClick={handleCategoryClick} />
      <div ref={menuRef}>
        <MeniFood title={selectedCategory} translations={selectedData} />
      </div>

      <MeniFood title="Dodatki" translations={dodatki} />
    </>
  );
}

export default Meni;

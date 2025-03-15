import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import MeniHero from "../components/Meni/MeniHero";
import MeniFood from "../components/Meni/MeniFood";
import MeniFoodPizza from "../components/Meni/MeniPizza"; // Keep only for "pice"

import HeroSlika from "../images/prostori_pec.jpg";
import MeniDodatki from "../components/Meni/MeniDodatki";

function Meni() {
  const { t } = useTranslation("global");

  // Fetch menu items
  const pice = t("pice", { returnObjects: true });
  const ostala_ponudba = t("ostala_ponudba", { returnObjects: true });
  const sladice = t("sladice", { returnObjects: true });
  const sladice_poleti = t("sladice_poleti", { returnObjects: true });
  const dodatki = t("dodatki", { returnObjects: true });

  const [selectedCategory, setSelectedCategory] = useState("pice");
  const menuRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  // Select menu data based on the selected category
  const selectedData =
    selectedCategory === "pice"
      ? pice
      : selectedCategory === "ostala_ponudba"
      ? ostala_ponudba
      : selectedCategory === "sladice"
      ? { sladice, sladice_poleti } // Keep them as separate objects
      : [];

  return (
    <>
      <HeroSite title="Meni" image={HeroSlika} className="moveLeft" />
      <MeniHero onCategoryClick={handleCategoryClick} />

      <div ref={menuRef}>
        {selectedCategory === "pice" ? (
          <>
            <MeniFoodPizza title="Pice" translations={selectedData} />
            <MeniDodatki title="Dodatki" translations={dodatki} />
          </>
        ) : selectedCategory === "sladice" ? (
          <>
            <MeniFood title="Sladice" translations={selectedData.sladice} />
            <MeniFood
              title="Sladice Poleti"
              translations={selectedData.sladice_poleti}
            />
          </>
        ) : (
          <MeniFood title={selectedCategory} translations={selectedData} />
        )}
      </div>
    </>
  );
}

export default Meni;

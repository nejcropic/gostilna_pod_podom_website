import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import HeroSite from "../components/Hero/HeroSite";
import MeniHero from "../components/Meni/MeniHero";
import MeniFood from "../components/Meni/MeniFood";
import MeniDodatki from "../components/Meni/MeniDodatki";

import HeroSlika from "../images/prostori_pec.webp";
import menu from "../data/menu.json";

/**
 * Merge menu data (price, image) with translations (name, ingredients)
 */
function mergeCategory(data, translations) {
  if (!data || !translations) return [];

  return Object.entries(data).map(([id, item]) => ({
    id,
    ...item,
    ...translations[id],
  }));
}

function Meni() {
  const { t } = useTranslation("global");
  const menuRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("pice");

  // ---------- translations ----------
  const mesnePiceT = t("mesne_pice", { returnObjects: true });
  const morskePiceT = t("morske_pice", { returnObjects: true });
  const vegiPiceT = t("vegi_pice", { returnObjects: true });
  const veganskePiceT = t("veganske_pice", { returnObjects: true });

  const ostalaPonudbaT = t("ostala_ponudba", { returnObjects: true });
  const sladiceT = t("sladice", { returnObjects: true });
  const dodatkiT = t("dodatki", { returnObjects: true });

  // ---------- merged data ----------
  const mesnePice = mergeCategory(menu.mesne_pice, mesnePiceT);
  const morskePice = mergeCategory(menu.morske_pice, morskePiceT);
  const vegiPice = mergeCategory(menu.vegi_pice, vegiPiceT);
  const veganskePice = mergeCategory(menu.veganske_pice, veganskePiceT);

  const ostalaPonudba = mergeCategory(menu.ostala_ponudba, ostalaPonudbaT);

  const sladice = mergeCategory(menu.sladice, sladiceT);

  const dodatki = mergeCategory(menu.dodatki, dodatkiT);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 200);
  };

  return (
    <>
      <HeroSite title="Meni" imageLarge={HeroSlika} className="moveLeft" />

      <MeniHero onCategoryClick={handleCategoryClick} />

      <div ref={menuRef}>
        {selectedCategory === "pice" && (
          <>
            <MeniFood title="Mesne pice" items={mesnePice} />
            <MeniFood title="Morske pice" items={morskePice} />
            <MeniFood title="Vegi pice" items={vegiPice} />
            <MeniFood title="Veganske pice" items={veganskePice} />
            <MeniDodatki title="Dodatki" items={dodatki} />
          </>
        )}

        {selectedCategory === "ostala_ponudba" && (
          <MeniFood title="Ostale jedi" items={ostalaPonudba} />
        )}

        {selectedCategory === "sladice" && (
          <>
            <MeniFood title="Sladice" items={sladice} />
          </>
        )}
      </div>
    </>
  );
}

export default Meni;

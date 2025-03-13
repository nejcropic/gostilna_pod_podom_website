import React from "react";

import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import HomeText from "../components/HomeText/HomeText";
import HomeImage from "../components/HomeImage/HomeImage";

import HeroSlika from "../images/naslovna1.jpg";

function Meni() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title="Meni" image={HeroSlika} className="moveLeft" />
    </>
  );
}

export default Meni;

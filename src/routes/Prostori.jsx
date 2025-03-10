import React from "react";

import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import HomeText from "../components/HomeText/HomeText";
import HomeImage from "../components/HomeImage/HomeImage";

import HeroSlika from "../images/panorama_8.jpg";
import Slika1 from "../images/pek_1.jpg";
import Slika2 from "../images/panorama_7_lowered.jpg";
function Prostori() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title="Gostilna" image={HeroSlika} />
      <HomeText description={t("gostilna.opis_1")} />
      <HomeImage image={Slika1} />
      <HomeText description={t("gostilna.opis_2")} />
      <HomeImage image={Slika2} />
    </>
  );
}

export default Prostori;

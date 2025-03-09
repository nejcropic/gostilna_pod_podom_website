import React from "react";
import { useTranslation } from "react-i18next";
import MapComponent from "../components/MapComponent/MapComponent";
import Hero from "../components/Hero/Hero";
import HomeText from "../components/HomeText/HomeText";
import Kontakt from "../components/Kontakt/Kontakt";
import HomeImage from "../components/HomeImage/HomeImage";
function Home() {
  const { t } = useTranslation("global");
  return (
    <div>
      <Hero />

      <HomeText
        title={t("home.uvod.naslov")}
        description={t("home.uvod.tekst")}
      />
      <HomeImage image="background-image: url(../../images/"
      <MapComponent />
      <Kontakt />
    </div>
  );
}

export default Home;

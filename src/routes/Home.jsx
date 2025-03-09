import React from "react";
import { useTranslation } from "react-i18next";
import MapComponent from "../components/MapComponent/MapComponent";
import Hero from "../components/Hero/Hero";
import HomeText from "../components/HomeText/HomeText";
import HomeTextList from "../components/HomeTextList/HomeTextList";
import Kontakt from "../components/Kontakt/Kontakt";
import HomeImage from "../components/HomeImage/HomeImage";

import Slika1 from "../images/panorama_2_lowered.jpg";
import Slika2 from "../images/panorama_8.jpg";

function Home() {
  const { t } = useTranslation("global");
  return (
    <div>
      <Hero />

      <HomeText
        title={t("home.uvod.naslov")}
        description={t("home.uvod.tekst")}
      />
      {/* Ambient - notranjost */}
      <HomeImage image={Slika1} />
      <HomeTextList
        title={t("home.ambient.naslov")}
        description={t("home.ambient.tekst")}
        list={{
          tekst1: t("home.ambient.list1"),
          tekst2: t("home.ambient.list2"),
          tekst3: t("home.ambient.list3"),
        }}
      />
      {/* Terasa */}
      <HomeImage image={Slika2} />
      <HomeTextList
        title={t("home.terasa.naslov")}
        description={t("home.terasa.tekst")}
        list={{
          tekst1: t("home.terasa.list1"),
          tekst2: t("home.terasa.list2"),
          tekst3: t("home.terasa.list3"),
        }}
      />
      <MapComponent />
      <Kontakt />
    </div>
  );
}

export default Home;

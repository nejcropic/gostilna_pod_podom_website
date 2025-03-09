import React from "react";
import { useTranslation } from "react-i18next";
import MapComponent from "../components/MapComponent/MapComponent";
import Hero from "../components/Hero/Hero";
import HomeText from "../components/HomeText/HomeText";
import HomeTextList from "../components/HomeTextList/HomeTextList";
import HomeGallery from "../components/HomeGallery/HomeGallery";
import Kontakt from "../components/Kontakt/Kontakt";
import HomeImage from "../components/HomeImage/HomeImage";
import Mnenja from "../components/Mnenja/Mnenja";
import Slika1 from "../images/panorama_2_lowered.jpg";
import Slika2 from "../images/panorama_8.jpg";
import Hrana1 from "../images/pice_1.jpg";
import Hrana2 from "../images/pice_2.jpg";
import Hrana3 from "../images/pice_3.jpg";
function getGalleryImages(category) {
  const imageSets = {
    hrana: [Hrana1, Hrana2, Hrana3],
    prostori: [Slika1, Slika2],
  };

  return imageSets[category] || [];
}
function Home() {
  const { t } = useTranslation("global");
  return (
    <div>
      <Hero />

      <HomeText
        main={t("home.uvod.main")}
        title={t("home.uvod.naslov")}
        description={t("home.uvod.tekst")}
      />
      {/* Ambient - notranjost */}
      <HomeImage image={Slika1} />
      <HomeTextList
        main={t("home.ambient.main")}
        title={t("home.ambient.naslov")}
        description={t("home.ambient.tekst")}
        list={{
          tekst1: t("home.ambient.list1"),
          tekst2: t("home.ambient.list2"),
          tekst3: t("home.ambient.list3"),
        }}
      />
      {/* Galerija */}
      <HomeGallery images={getGalleryImages("hrana")} />
      <Mnenja />
      {/* Terasa */}
      <HomeImage image={Slika2} />
      <HomeTextList
        main={t("home.terasa.main")}
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

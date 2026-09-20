import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero/Hero";
import Mnenja from "../components/Mnenja/Mnenja";

/* Slike */
import NaslovnicaLarge from "../images/pice_pec.webp";
import Home1 from "../images/home_1.webp";
import Home2 from "../images/home_2.webp";
import HomeHrana1 from "../images/home_colage_1.webp";
import HomeHrana2 from "../images/home_colage_2.webp";
import HomeHrana3 from "../images/home_colage_3.webp";
import HomeHrana4 from "../images/home_colage_4.webp";
import SiteImage from "../components/Site/SiteImage";
import SiteGallery from "../components/Site/SiteGallery";
import SiteText from "../components/Site/SiteText";
import LazyVideo from "../components/LazyVideo";

import MainVideo from "../videos/main_video.mp4";
import VeganskiVideo from "../videos/veganski_video.mp4";
function getGalleryImages(category) {
  const imageSets = {
    hrana: [HomeHrana1, HomeHrana2, HomeHrana3, HomeHrana4],
    prostori: [Home1, Home2],
  };

  return imageSets[category] || [];
}

function Home() {
  const { t } = useTranslation("global");
  return (
    <div>
      <Hero imageLarge={NaslovnicaLarge} title="Gostišče" span="Pod Podom" />
      {/* Uvod */}
      <SiteText
        main={t("home.uvod.main")}
        title={t("home.uvod.naslov")}
        description={t("home.uvod.tekst")}
        buttonText={t("home.uvod.button")}
        link="/meni"
      />
      {/* Ambient - notranjost */}
      <div className="site-gallery full">
        <LazyVideo src={MainVideo} poster={Home1} label="Ambient gostišča" />
        {/* <SiteImage image={Home1} /> */}
      </div>
      <SiteText
        main={t("home.ambient.main")}
        title={t("home.ambient.naslov")}
        description={t("home.ambient.tekst")}
        list={{
          tekst1: t("home.ambient.list1"),
          tekst2: t("home.ambient.list2"),
          tekst3: t("home.ambient.list3"),
        }}
        buttonText={t("home.ambient.button")}
        link="/gostisce"
      />
      {/* Galerija */}
      <SiteGallery images={getGalleryImages("hrana")} />
      {/* Veganske pice */}
      <SiteText
        main={t("home.veganski.main")}
        title={t("home.veganski.naslov")}
        description={t("home.veganski.tekst")}
        buttonText={t("home.veganski.button")}
        link="/meni"
      />
      {/* Ambient - notranjost */}
      <div className="site-gallery full">
        <LazyVideo
          src={VeganskiVideo}
          poster={HomeHrana1}
          label="Priprava veganske pice"
        />
        {/* <SiteImage image={Home1} /> */}
      </div>
      {/* Mnenja */}
      <Mnenja />
      {/* Terasa */}
      <div className="site-gallery full">
        <SiteImage image={Home2} />
      </div>
      <SiteText
        main={t("home.okolica.main")}
        title={t("home.okolica.naslov")}
        description={t("home.okolica.tekst")}
        list={{
          tekst1: t("home.okolica.list1"),
          tekst2: t("home.okolica.list2"),
          tekst3: t("home.okolica.list3"),
        }}
        buttonText={t("home.okolica.button")}
        link="/okolica"
      />
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero/Hero";
import Mnenja from "../components/Mnenja/Mnenja";

/* Slike */
import NaslovnicaPlaceholder from "../meni/pice_pec_small.jpg";
import {
  Naslovnica,
  Home1,
  Home2,
  HomeHrana1,
  HomeHrana2,
  HomeHrana3,
  HomeHrana4,
} from "..";
import NaslovnicaSmall from "../meni/pice_pec_small.jpg"; // 480px width
import NaslovnicaMedium from "../meni/pice_pec_medium.jpg"; // 768px width
import NaslovnicaLarge from "../images/pice_pec.jpg";
import SiteImage from "../components/Site/SiteImage";
import SiteGallery from "../components/Site/SiteGallery";
import SiteText from "../components/Site/SiteText";

function getGalleryImages(category) {
  const imageSets = {
    hrana: [HomeHrana1, HomeHrana2, HomeHrana3, HomeHrana4],
    prostori: [Home1, Home2],
  };

  return imageSets[category] || [];
}

function Home() {
  const { t } = useTranslation("global");
  const [imageSrc, setImageSrc] = useState(NaslovnicaPlaceholder);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = Naslovnica;
    img.onload = () => {
      setImageSrc(Naslovnica);
      setLoaded(true);
    };
  }, []);
  return (
    <div>
      <Hero
        imageSmall={NaslovnicaSmall}
        imageMedium={NaslovnicaMedium}
        imageLarge={NaslovnicaLarge}
        title="Gostišče"
        span="Pod Podom"
      />
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
        <SiteImage image={Home1} />
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
        link="/prostori"
      />
      {/* Galerija */}
      <SiteGallery images={getGalleryImages("hrana")} />
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
        link="/lokacija"
      />
    </div>
  );
}

export default Home;

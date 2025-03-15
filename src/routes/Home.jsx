import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero/Hero";
import Mnenja from "../components/Mnenja/Mnenja";

/* Slike */
import Slika1 from "../images/panorama_2_lowered.jpg";
import Slika2 from "../images/panorama_8.jpg";
import Hrana1 from "../images/pice_1.jpg";
import Hrana2 from "../images/kalamari.jpeg";
import Hrana3 from "../images/home_sladica.jpg";
import Hrana4 from "../images/plosca.png";
import { Naslovnica } from "..";
import SiteImage from "../components/Site/SiteImage";
import SiteGallery from "../components/Site/SiteGallery";
import SiteText from "../components/Site/SiteText";

function getGalleryImages(category) {
  const imageSets = {
    hrana: [Hrana1, Hrana2, Hrana3, Hrana4],
    prostori: [Slika1, Slika2],
  };

  return imageSets[category] || [];
}

function Home() {
  const { t } = useTranslation("global");
  return (
    <div>
      <Hero image={Naslovnica} title="Gostišče" span="pod podom" />
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
        <SiteImage image={Slika1} />
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
        <SiteImage image={Slika2} />
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

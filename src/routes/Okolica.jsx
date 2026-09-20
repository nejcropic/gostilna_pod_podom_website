import React from "react";

import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
/* 
import HeroSlika from "../images/okolica_panorama.webp"; */
import HeroSlikaOkolica from "../images/okolica_hero.webp";
import Slika1 from "../images/okolica_slika_1.webp";
import Slika2 from "../images/okolica_slika_2.webp";
import Slika3 from "../images/okolica_slika_3.webp";
import Slika4 from "../images/okolica_slika_4.webp";
import SiteText from "../components/Site/SiteText";
import SiteImage from "../components/Site/SiteImage";

function Lokacija() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title={t("lokacija.naslov")} imageLarge={HeroSlikaOkolica} />

      <div className="site-gallery">
        <SiteText adjust="adjust" description={t("lokacija.opis_1")} />
        <SiteImage image={Slika1} />
        <SiteImage image={Slika2} />
        <SiteImage image={Slika4} />
        <SiteText adjust="adjust" description={t("lokacija.opis_2")} />
        <SiteImage image={Slika3} />
      </div>
    </>
  );
}

export default Lokacija;

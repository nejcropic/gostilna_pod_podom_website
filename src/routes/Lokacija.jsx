import React from "react";

import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";

import HeroSlika from "../images/panorama_8.jpg";
import Slika1 from "../images/terasa.jpg";
import Slika2 from "../images/kozolcek.jpg";
import Slika3 from "../images/bovljek_stolp.jpg";
import Slika4 from "../images/lokacija_2.jpg";
import SiteText from "../components/Site/SiteText";
import SiteImage from "../components/Site/SiteImage";

function Lokacija() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title={t("lokacija.naslov")} image={HeroSlika} />

      <div className="site-gallery">
        <SiteText className="adjust" description={t("lokacija.opis_1")} />
        <SiteImage image={Slika1} />
        <SiteImage image={Slika2} />
        <SiteImage image={Slika4} />
        <SiteText description={t("lokacija.opis_2")} />
        <SiteImage image={Slika3} />
      </div>
    </>
  );
}

export default Lokacija;

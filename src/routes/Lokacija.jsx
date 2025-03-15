import React from "react";

import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import HomeText from "../components/Home/HomeText";
import HomeTextList from "../components/Home/HomeTextList";
import HomeImage from "../components/Home/HomeImage";

import HeroSlika from "../images/panorama_8.jpg";
import Slika1 from "../images/terasa.jpg";
import Slika2 from "../images/kozolcek.jpg";
import Slika3 from "../images/bovljek_stolp.jpg";
import Slika4 from "../images/lokacija_2.jpg";
import SiteText from "../components/SiteText/SiteText";
import SiteImage from "../components/SiteImage/SiteImage";

function Lokacija() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title={t("lokacija.naslov")} image={HeroSlika} />
      <div className="sites-container">
        <SiteText description={t("lokacija.opis_1")} />
        <SiteImage image={Slika1} />

        <SiteImage image={Slika2} />

        <SiteImage image={Slika4} />
        {/* 
        <SiteText description={t("lokacija.opis_2")} />*/}

        <SiteText description={t("lokacija.opis_2")} />
        <SiteImage image={Slika3} />
      </div>
      {/* <HomeTextList
        description={t("okolica.tekst")}
        list={{
          tekst1: t("okolica.list1"),
          tekst2: t("okolica.list2"),
          tekst3: t("okolica.list3"),
        }}
      /> */}
    </>
  );
}

export default Lokacija;

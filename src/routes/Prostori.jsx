import React from "react";
import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import "../components/SiteText/SiteText.css";
import HeroSlika from "../images/panorama_7_wide.jpg";
import Slika1 from "../images/pek_1.jpg";
import Slika2 from "../images/panorama_2.jpg";
import Slika3 from "../images/sladice_6.jpg";
import Slika4 from "../images/sladice_3.jpg";
import Slika5 from "../images/sladice_2.jpg";
import SiteText from "../components/SiteText/SiteText";
import SiteImage from "../components/SiteImage/SiteImage";
function Prostori() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title="Gostilna" image={HeroSlika} className="" />
      <div className="sites-container">
        <SiteText description={t("gostilna.opis_1")} />
        <SiteImage image={Slika1} />
      </div>
      <SiteImage image={Slika2} />
      <div className="sites-container">
        <SiteText description={t("gostilna.opis_2")} />
        <SiteImage image={Slika3} />
        <SiteImage image={Slika4} />
        <SiteImage image={Slika5} />
      </div>
    </>
  );
}

export default Prostori;

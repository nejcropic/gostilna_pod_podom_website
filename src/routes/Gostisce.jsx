import React from "react";
import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import "../components/Site/SiteText.css";
import HeroSlika from "../images/prostori_panorama_7_wide.jpg";
import Slika1 from "../images/pice_pek.jpg";
import Slika2 from "../images/prostori_panorama_home.jpg";
import Slika3 from "../images/prostori_3.jpeg";
import Slika4 from "../images/prostori_ogenj.jpg";
import Slika5 from "../images/prostori_2.jpg";
import SiteText from "../components/Site/SiteText";
import SiteImage from "../components/Site/SiteImage";
function Gostisce() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite title={t("gostilna.naslov")} image={HeroSlika} className="" />
      <div className="site-gallery">
        <SiteText adjust="adjust" description={t("gostilna.opis_1")} />
        <SiteImage image={Slika1} />
      </div>
      <div className="site-gallery full">
        <SiteImage image={Slika2} />
      </div>
      <div className="site-gallery">
        <SiteText adjust="adjust" description={t("gostilna.opis_2")} />
        <SiteImage image={Slika3} />

        <SiteImage image={Slika4} />
        <SiteImage image={Slika5} />
      </div>
    </>
  );
}

export default Gostisce;

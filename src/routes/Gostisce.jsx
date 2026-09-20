import React from "react";
import { useTranslation } from "react-i18next";
import HeroSite from "../components/Hero/HeroSite";
import "../components/Site/SiteText.css";
import HeroSlika from "../images/gostisce_hero.webp";
import Slika1 from "../images/gostisce_slika_1.webp";
import Slika2 from "../images/gostisce_slika_2.webp";
import Slika3 from "../images/gostisce_slika_3.webp";
import Slika4 from "../images/gostisce_slika_4.webp";
import Slika5 from "../images/gostisce_slika_5.webp";
import SiteText from "../components/Site/SiteText";
import SiteImage from "../components/Site/SiteImage";
function Gostisce() {
  const { t } = useTranslation("global");
  return (
    <>
      <HeroSite
        title={t("gostilna.naslov")}
        imageLarge={HeroSlika}
        className=""
      />
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

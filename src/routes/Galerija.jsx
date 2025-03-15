import React from "react";
import HeroSite from "../components/Hero/HeroSite";
import HeroSlika from "../images/okolica_terasa.jpg";
import GalerijaMain from "../components/Galerija/GalerijaHero";

function Galerija() {
  return (
    <>
      <HeroSite title="Galerija" imageLarge={HeroSlika} className="" />
      <GalerijaMain />
    </>
  );
}
export default Galerija;

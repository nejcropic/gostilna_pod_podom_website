import React from "react";
import HeroSite from "../components/Hero/HeroSite";
import HeroSlika from "../images/terasa_main.jpg";
import GalerijaMain from "../components/Galerija/GalerijaHero";

function Galerija() {
  return (
    <>
      <HeroSite title="Galerija" image={HeroSlika} className="" />
      <GalerijaMain />
    </>
  );
}
export default Galerija;

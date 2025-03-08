import React from "react";
import MapComponent from "../components/MapComponent/MapComponent";
import Hero from "../components/Hero/Hero";
import HomeText from "../components/HomeText/HomeText";
import Kontakt from "../components/Kontakt/Kontakt";
function Home() {
  return (
    <div>
      <Hero />

      <HomeText />

      <MapComponent />
      <Kontakt />
    </div>
  );
}

export default Home;

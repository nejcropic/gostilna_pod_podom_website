import React, { useState, useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// ✅ Import Images
import NaslovnicaSmall from "./meni/pice_pec_small.jpg";
import NaslovnicaMedium from "./meni/pice_pec_medium.jpg";
import Naslovnica from "./meni/pice_pec.jpg";

import Home1 from "./meni/prostori_panorama_home.jpg";
import Home2 from "./images/okolica_panorama.jpg";
import HomeHrana1 from "./images/pice_ostalo_5.jpg";
import HomeHrana2 from "./images/ostale_jedi_kalamari.jpeg";
import HomeHrana3 from "./images/sladice_cokoladne.jpg";
import HomeHrana4 from "./images/ostale_jedi_plosca.jpeg";

import HeroSlikaGostisce from "./images/prostori_panorama_7_wide.jpg";
import HeroSlikaOkolica from "./images/okolica_panorama.jpg";
import HeroSlikaMeni from "./images/prostori_pec.jpg";
import HeroSlikaGalerija from "./images/okolica_terasa.jpg";

import translate_si from "./components/translations/translations_si.json";
import translate_en from "./components/translations/translations_en.json";
import translate_de from "./components/translations/translations_de.json";

// ✅ Initialize Translations
i18next.init({
  interpolation: { escapeValue: false },
  lng: "si",
  resources: {
    si: { global: translate_si },
    en: { global: translate_en },
    de: { global: translate_de },
  },
});

// ✅ Preload Images with Promises
const preloadImages = (images) => {
  return Promise.all(
    images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Prevent errors from blocking load
        })
    )
  );
};

// ✅ List of Essential Images to Preload
const imagesToPreload = [
  NaslovnicaSmall,
  NaslovnicaMedium,
  Naslovnica,
  HeroSlikaGostisce,
  HeroSlikaOkolica,
  HeroSlikaMeni,
  HeroSlikaGalerija,
  Home1,
  Home2,
  HomeHrana1,
  HomeHrana2,
  HomeHrana3,
  HomeHrana4,
];

export {
  NaslovnicaSmall,
  NaslovnicaMedium,
  Naslovnica,
  Home1,
  Home2,
  HomeHrana1, // ✅ Make sure it's in the list
  HomeHrana2,
  HomeHrana3,
  HomeHrana4,
  HeroSlikaOkolica,
};

// ✅ React Root Rendering
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// ✅ Loading State for Preloader
function RootApp() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    preloadImages(imagesToPreload).then(() => {
      setTimeout(() => setIsLoading(false), 1000); // Add delay for smooth transition
    });
  }, []);

  return (
    <React.StrictMode>
      <HashRouter>
        <I18nextProvider i18n={i18next}>
          <App isLoading={isLoading} />
        </I18nextProvider>
      </HashRouter>
    </React.StrictMode>
  );
}

root.render(<RootApp />);

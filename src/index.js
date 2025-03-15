import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// ✅ Import critical images (Hero + Home images)
import NaslovnicaSmall from "./meni/pice_pec_small.jpg"; // ✅ 480px width
import NaslovnicaMedium from "./meni/pice_pec_medium.jpg"; // ✅ 768px width
import Naslovnica from "./meni/pice_pec.jpg"; // ✅ 1920px width

import Home1 from "./meni/prostori_panorama_home.jpg";
import Home2 from "./images/okolica_panorama.jpg";
import HomeHrana1 from "./images/pice_ostalo_5.jpg";
import HomeHrana2 from "./meni/ostale_jedi_kalamari.jpeg";
import HomeHrana3 from "./images/sladice_cokoladne.jpg";
import HomeHrana4 from "./meni/ostale_jedi_plosca.jpeg";

// ✅ Translations
import translate_si from "./components/translations/translations_si.json";
import translate_en from "./components/translations/translations_en.json";
import translate_de from "./components/translations/translations_de.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "si",
  resources: {
    si: {
      global: translate_si,
    },
    en: {
      global: translate_en,
    },
    de: {
      global: translate_de,
    },
  },
});

// ✅ Improved Image Preloading Function
const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// ✅ Preload essential images (Hero + Home, but NOT gallery)
preloadImages([
  NaslovnicaSmall,
  NaslovnicaMedium,
  Naslovnica,
  Home1,
  Home2,
  HomeHrana1,
  HomeHrana2,
  HomeHrana3,
  HomeHrana4,
]);

// ✅ Export all necessary images for use in components
export {
  NaslovnicaSmall,
  NaslovnicaMedium,
  Naslovnica,
  Home1,
  Home2,
  HomeHrana1,
  HomeHrana2,
  HomeHrana3,
  HomeHrana4,
};

// ✅ React Root Rendering
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
);

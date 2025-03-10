import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

// ✅ Import critical images (Logo + Hero image)
import Naslovnica from "./images/naslovna.jpg"; // Main Hero Image (Preload)

// ✅ Import large images (Will be lazy-loaded in <img>)
import Jedi_zunaj from "./images/hrana_1.jpg";
import Panorama from "./images/panorama_1.jpg";
/* import Posamicno_2 from "./images/posamicno_2.jpg";
import Posamicno_3 from "./images/posamicno_3.jpg";
import Skupna_1 from "./images/skupaj_1.JPG";
import Skupna_2 from "./images/skupaj_2.JPG";
import PhoneIcon from "./icons/phone-call.png";
import MailIcon from "./icons/mail.png";
import Dimenzije1 from "./images/dimenzije1.png";
import Dimenzije2 from "./images/dimenzije2.png";
 */
// Translatiaons
import translate_si from "./components/translations/translations_si.json";
import translate_en from "./components/translations/translations_en.json";
import translate_de from "./components/translations/translations_de.json";
import translate_it from "./components/translations/translations_it.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

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
    it: {
      global: translate_it,
    },
  },
});
// ✅ PRELOAD CRITICAL IMAGES
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

// Preload **only** the necessary images
preloadImage(Naslovnica); // ✅ Preload Hero Image

// ✅ Export images
export { Naslovnica, Jedi_zunaj };

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

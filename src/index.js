import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import translate_si from "./components/translations/translations_si.json";
import translate_en from "./components/translations/translations_en.json";
import translate_de from "./components/translations/translations_de.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem("language") || "si",
  fallbackLng: "si",
  supportedLngs: ["si", "en", "de"],
  resources: {
    si: { global: translate_si },
    en: { global: translate_en },
    de: { global: translate_de },
  },
});

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

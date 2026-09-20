import React from "react";
import "./Kontakt.css";
import { useTranslation } from "react-i18next";
import MapComponent from "../MapComponent/MapComponent";

import Tripadvisor from "../../icons/tripadvisor.png";

export default function Kontakt() {
  const { t } = useTranslation("global");
  return (
    <div className="kontakt-wrapper">
      <div className="kontakt-divider">
        <MapComponent />
        <div className="kontakt-container">
          <div className="kontakt-item">
            <h2>{t("kontakt.naslov")}:</h2>
            <a href="https://maps.app.goo.gl/jK11yzpicywKAyr17">
              Kuželjevec 7a, 1303 Zagradec
            </a>
            <a href="tel:+38631307279">031/ 307-279</a>
            <a href="mailto:gpodpodom@gmail.com">gpodpodom@gmail.com</a>
            <div className="social-icons">
              <a
                href="https://www.tripadvisor.com/Restaurant_Review-g4581334-d33003913-Reviews-Gostisce_Pod_Podom-Zagradec_Lower_Carniola_Region.html"
                target="_blank"
                rel="noreferrer"
                aria-label="Gostišče Pod Podom na Tripadvisorju"
              >
                <img src={Tripadvisor} alt="Tripadvisor" loading="lazy" />
              </a>
              <a
                href="https://www.facebook.com/p/Gostišče-Pod-Podom-61557147044531"
                target="_blank"
                rel="noreferrer"
                aria-label="Gostišče Pod Podom na Facebooku"
              >
                <i className="fa-brands fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
            <div className="kontakt-item-button">
              <a
                className="kontakt-button"
                href="https://maps.app.goo.gl/jK11yzpicywKAyr17"
                target="_blank"
                rel="noreferrer"
              >
                {t("kontakt.navodila")}
              </a>
            </div>
          </div>
          <div className="kontakt-item">
            <h2>{t("kontakt.odpiralnicas")}:</h2>
            <p>{t("kontakt.dnevi.petek")}: 14-21</p>
            <p>{t("kontakt.dnevi.sobota")}: 10-22</p>
            <p>{t("kontakt.dnevi.nedelja")}: 10-20</p>
          </div>
        </div>
      </div>

      <hr />
      <p>
        Copyright © {new Date().getFullYear()}{" "}
        <a href="https://www.nejc-ropic.si/">Nejc Ropič</a>
      </p>
    </div>
  );
}

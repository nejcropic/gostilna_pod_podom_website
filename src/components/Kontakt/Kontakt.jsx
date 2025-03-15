import React from "react";
import "./Kontakt.css";
import { Link } from "react-router-dom";
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
              <Link to="https://www.tripadvisor.com/Restaurant_Review-g4581334-d33003913-Reviews-Gostisce_Pod_Podom-Zagradec_Lower_Carniola_Region.html">
                <img src={Tripadvisor} alt="" />
              </Link>
              <Link to="https://www.facebook.com/p/Gostišče-Pod-Podom-61557147044531">
                <button>
                  <i class="fa-brands fa-facebook" aria-hidden="true"></i>
                </button>
              </Link>
            </div>
            <div className="kontakt-item-button">
              <a href="https://maps.app.goo.gl/jK11yzpicywKAyr17">
                <button className="kontakt-button">
                  {t("kontakt.navodila")}
                </button>
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
        Copyright @2025 <Link to="https://www.nejc-ropic.si/"> Nejc Ropič</Link>
      </p>
    </div>
  );
}

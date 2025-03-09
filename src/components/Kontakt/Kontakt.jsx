import React from "react";
import "./Kontakt.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Kontakt() {
  const { t } = useTranslation("global");
  return (
    <div className="kontakt-wrapper">
      <div className="kontakt-container">
        <div className="kontakt-item">
          <h2>{t("kontakt.naslov")}:</h2>
          <p>Kuželjevec 7a, 1303 Zagradec</p>
          <a href="tel:+38631307279">031/ 307-279</a>
          <a href="mailto:gpodpodom@gmail.com">gpodpodom@gmail.com</a>
          <Link to="https://www.facebook.com/p/Gostišče-Pod-Podom-61557147044531">
            <button>
              <i class="fa-brands fa-facebook"></i>
            </button>
          </Link>
        </div>
        <div className="kontakt-item">
          <h2>{t("kontakt.odpiralnicas")}:</h2>
          <p>{t("kontakt.dnevi.petek")}: 14-21</p>
          <p>{t("kontakt.dnevi.sobota")}: 12-22</p>
          <p>{t("kontakt.dnevi.nedelja")}: 12-22</p>
        </div>
      </div>
      <hr />
      <p>
        Copyright @2025 <Link to="https://www.nejc-ropic.si/"> Nejc Ropič</Link>
      </p>
    </div>
  );
}

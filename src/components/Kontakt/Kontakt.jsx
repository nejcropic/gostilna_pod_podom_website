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
          <a href="mailto:gpodpodom@gmail.com">Facebook ikona</a>
        </div>
        <div className="kontakt-item">
          <h2>{t("kontakt.odpiralnicas")}:</h2>
          <p>Petek: 14-21</p>
          <p>Sobota: 12-22</p>
          <p>Nedelja: 12-22</p>
        </div>
      </div>
      <hr />
      <p>
        Copyright @2025 <Link to="https://www.nejc-ropic.si/"> Nejc Ropič</Link>
      </p>
    </div>
  );
}

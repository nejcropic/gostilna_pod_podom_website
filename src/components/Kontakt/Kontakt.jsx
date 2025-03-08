import React from "react";
import "./Kontakt.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Kontakt() {
  const { t } = useTranslation("global");
  return (
    <div className="main-wrapper">
      <div className="main-container center">
        <h1>{t("kontakt.naslov")}:</h1>
        <div className="kontakt-divider">
          <a href="tel:+38640772130">040 772 130</a>
          <a href="tel:+38641382153">041 382 153</a>
          <a href="mailto:info@brecelj.eu">INFO@BRECELJ.EU</a>

          <div className="link-divider">
            <a href="https://www.brecelj.eu/">WWW.BRECELJ.EU /</a>
            <a href="https://www.brecelj.co/"> BRECELJ.CO </a>
          </div>
          <a>#BRECELJGRAFIKA</a>
          <br />
          <p>
            BRECELJ GRAFIKA D.O.O &#x2022; LITIJSKA CESTA 38 &#x2022; 1000
            LJUBLJANA
          </p>
          <p>P.E: ŠENTJAKOB 38 &#x2022; 1231 LJUBLJANA - ČRNUČE</p>
        </div>
      </div>
    </div>
  );
}

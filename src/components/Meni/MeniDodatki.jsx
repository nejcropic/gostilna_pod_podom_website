import React from "react";
import "./MeniFood.css";

export default function MeniDodatki({ title, translations }) {
  return (
    <section className="meni-section">
      <h1>{title}</h1>
      <hr />
      <div className="meni-container dodatki">
        {Object.entries(translations).map(([key, translations]) => (
          <div
            className={`meni-card-dodatki ${
              !translations.sestavine ? "lower" : ""
            }`}
            key={key}
          >
            <div className="meni-text-dodatki">
              <p>{translations.ime}</p>
              <span className="meni-price">{translations.cena} €</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

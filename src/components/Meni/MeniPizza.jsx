import React from "react";
import "./MeniFood.css";

export default function MeniFoodPizza({ title, translations }) {
  return (
    <section className="meni-section">
      <h1>{title}</h1>
      <hr />
      <div className="meni-container">
        {Object.entries(translations).map(([key, translations]) => (
          <div
            className={`meni-card-dodatki ${
              !translations.sestavine ? "lower" : ""
            }`}
            key={key}
          >
            <div className="meni-text-dodatki">
              <h3>{translations.ime}</h3>
              {translations.sestavine && <p>{translations.sestavine}</p>}
              <span className="meni-price-dodatki">{translations.cena} €</span>
            </div>

            {translations.slika && (
              <img
                src={require(`../../meni/${translations.slika}`)}
                alt={translations.ime}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

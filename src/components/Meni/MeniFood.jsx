import React from "react";
import "./MeniFood.css";

export default function MeniFood({ title, translations }) {
  return (
    <section className="meni-section">
      <h1>{title}</h1>
      <hr />
      <div className="meni-container">
        {Object.entries(translations).map(([key, pizza]) => (
          <div className="meni-card" key={key}>
            <div className="meni-text">
              <h3>{pizza.ime}</h3>
              <p>{pizza.sestavine}</p>
            </div>
            <span className="meni-price">{pizza.cena} €</span>
            {/* Dynamically set image src */}
            {/* 
            <img src={pizza.slika} alt={pizza.ime} /> */}
          </div>
        ))}
      </div>
    </section>
  );
}

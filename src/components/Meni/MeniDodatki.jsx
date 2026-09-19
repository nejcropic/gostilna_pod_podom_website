import React from "react";
import "./MeniFood.css";

export default function MeniDodatki({ title, items }) {
  return (
    <section className="meni-section">
      <h1>{title}</h1>
      <hr />

      <div className="meni-container dodatki">
        {items.map((item) => (
          <div key={item.id} className="meni-card-dodatki lower">
            <div className="meni-text-dodatki">
              <p>{item.name}</p>
              <span className="meni-price">{item.price.toFixed(2)} €</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

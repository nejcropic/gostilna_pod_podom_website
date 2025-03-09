import React from "react";
import "./HomeText.css";

export default function HomeText({ main, title, description }) {
  return (
    <section className="home-section">
      <div className="home-text">
        <h3>{main}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

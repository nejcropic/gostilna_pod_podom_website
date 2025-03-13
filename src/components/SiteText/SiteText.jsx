import React from "react";
import "./SiteText.css";
import { Link } from "react-router-dom";

export default function SiteText({ main, title, description }) {
  return (
    <section className="site-section">
      <div className="site-text">
        <h3>{main}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

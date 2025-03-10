import React from "react";
import "./HomeText.css";
import { Link } from "react-router-dom";

export default function HomeText({
  main,
  title,
  description,
  buttonText,
  link,
}) {
  return (
    <section className="home-section">
      <div className="home-text">
        <h3>{main}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {buttonText && (
        <div className="home-button">
          <Link to={link}>{buttonText}</Link>
        </div>
      )}
    </section>
  );
}

import React from "react";
import "../HomeText/HomeText.css";
import { Link } from "react-router-dom";

export default function HomeTextList({
  main,
  title,
  description,
  list,
  buttonText,
  link,
}) {
  return (
    <div>
      <section className="home-section">
        <div className="home-text">
          <h3>{main}</h3>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul>
            {Object.values(list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="home-button">
          <Link to={link}>{buttonText}</Link>
        </div>
      </section>
    </div>
  );
}

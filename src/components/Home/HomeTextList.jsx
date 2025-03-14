import React from "react";
import "../Home/HomeText.css";
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
        {buttonText && (
          <>
            <hr className="home-line" />{" "}
            <Link to={link}>
              <div className="home-button">
                <p>{buttonText}</p>
              </div>
            </Link>
          </>
        )}
      </section>
    </div>
  );
}

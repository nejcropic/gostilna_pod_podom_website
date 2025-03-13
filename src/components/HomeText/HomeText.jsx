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
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="home-section">
      <div className="home-text">
        <h3>{main}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
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
  );
}

import React from "react";
import "./SiteText.css";
import { Link } from "react-router-dom";

export default function SiteText({
  main,
  title,
  description,
  list,
  buttonText,
  link,
  adjust,
}) {
  return (
    <section className={`site-section ${adjust ? adjust : ""}`}>
      {" "}
      <div className="site-text">
        <h3>{main}</h3>
        <h1>{title}</h1>
        <p>{description}</p>
        {list && (
          <ul>
            {Object.values(list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {buttonText && (
        <>
          <hr className="site-line" />{" "}
          <Link to={link}>
            <div className="site-button">
              <p>{buttonText}</p>
            </div>
          </Link>
        </>
      )}
    </section>
  );
}

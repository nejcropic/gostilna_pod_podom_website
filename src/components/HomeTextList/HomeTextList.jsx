import React from "react";
import "../HomeText/HomeText.css";

export default function HomeTextList({ main, title, description, list }) {
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
      </section>
    </div>
  );
}

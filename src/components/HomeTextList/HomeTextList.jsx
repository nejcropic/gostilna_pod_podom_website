import React from "react";
import "./HomeTextList.css";
import panoramaImage from "../../images/panorama_1.jpg"; // Your 360° image

export default function HomeTextList({ title, description, list }) {
  return (
    <div>
      <section className="home-section">
        <div className="home-text">
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

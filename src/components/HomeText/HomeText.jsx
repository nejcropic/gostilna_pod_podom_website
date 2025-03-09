import React from "react";
import "./HomeText.css"; /* 
import ReactPhotoSphereViewer from "../Image360Viewer/Image360Viewer"; */
import Panorama from "../../images/panorama_1.jpg";
export default function HomeText({ title, description }) {
  return (
    <section className="home-section">
      <div className="home-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

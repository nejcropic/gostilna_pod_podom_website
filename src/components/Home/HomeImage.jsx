import React from "react";
import "./HomeImage.css";
function HomeImage({ image }) {
  return (
    <section className="home-image">
      <div
        className="home-background"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </section>
  );
}

export default HomeImage;

import React, { useEffect, useState } from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

function Hero({
  title,
  imagePlaceholder, // ✅ Placeholder for fast loading
  imageSmall,
  imageMedium,
  imageLarge,
  span,
  className,
}) {
  const { t } = useTranslation("global");
  const [imageSrc, setImageSrc] = useState(imagePlaceholder); // ✅ Start with placeholder
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageLarge;
    img.onload = () => {
      setImageSrc(imageLarge);
      setIsLoaded(true);
    };
  }, [imageLarge]);

  return (
    <section
      className={`hero-container${className ? ` ${className}` : ""}`}
      style={{ backgroundImage: `url(${imagePlaceholder})` }} // ✅ Background fallback
    >
      <div className="hero-image-wrapper">
        <img
          className={`hero-image ${isLoaded ? "loaded" : "loading"}`}
          src={imageSrc}
          srcSet={`${imageSmall} 480w, ${imageMedium} 768w, ${imageLarge} 1920w`}
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 768px, 1920px"
          alt={title}
          loading="eager"
        />
      </div>
      <div className="hero-title">
        <h1>
          {title} <span className="break">{span}</span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;

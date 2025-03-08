import { useState, useEffect } from "react";
import Panorama from "../../images/panorama_1.jpg"; // Ensure the correct path

export default function ParallaxScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" style={{ height: "50vh", overflow: "hidden" }}>
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${Panorama})`,
          transform: `rotate(${scrollY * 0.05}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      ></div>

      {/* Foreground Text */}
      <div
        className="relative z-10 flex justify-center items-center h-screen text-white text-5xl font-bold"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        Scroll Down
      </div>
    </div>
  );
}

import React from "react";
import "./HomeText.css";
import ParallaxScroll from "../ParallaxScroll/Parallax";
export default function HomeText() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h3>Prava pica, prava izkušnja!</h3>
        <p>
          Vabimo vas, da poskusite naše odlične pice, pripravljene z ljubeznijo
          in mojstrsko roko izkušenega picopeka. Poleg hrustljavih pic vam
          nudimo tudi druge dobrote, ki jih pripravljava posebej za vas.
        </p>
      </div>
      <div className="home-text">
        <p>Pri nas si lahko privoščite:</p>
        <ul>
          <li>Različne vrste pic - od klasičnih do posebnih kombinacij</li>
          <li>MOžnost pirinega polnozrnatega testa za še boljši okus</li>
          <li>Pice pri nas ali za domov - izbira je vaša!</li>
        </ul>
      </div>
    </div>
  );
}

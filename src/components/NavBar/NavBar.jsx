// NavBar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { NavBarItems } from "./NavBarItems";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { navAnimation, navAnimationPhone } from "../animations";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import MenuWhite from "../../icons/menu_white.png";
import MenuCross from "../../icons/cross.png";
function NavBar() {
  const { t } = useTranslation("global");
  const [navState, setNavState] = useState(false);
  const [navMenu, setNavMenu] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeNavState = () => {
    if (window.scrollY < 150) {
      setNavState(false);
      setShowBorder(false);
    } else if (window.scrollY < lastScrollY) {
      setNavState(false);
      setShowBorder(true);
    } else {
      setNavState(true);
      setShowBorder(true);
    }
    setLastScrollY(window.scrollY);
  };
  const showNavBar = () => setNavMenu(!navMenu);
  return (
    <>
      <nav className="nav-wrapper">
        <div className="menu-title">
          <Link to="/">pod podom</Link>
        </div>
        <div className={navMenu ? "nav-container active" : "nav-container"}>
          {NavBarItems.map((item, index) => (
            <Link
              key={index}
              className="nav-links"
              to={item.url}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                showNavBar();
              }}
            >
              {item.key}
            </Link>
          ))}
        </div>
        <button className="nav-icon">
          <a href="tel:+38631307279">{t("nav.naroci")}</a>
        </button>
        <LanguageDropdown />
        <button onClick={showNavBar}>
          <img src={navMenu ? MenuCross : MenuWhite} alt="Menu Icon" />
        </button>

        {/* <div className={navMenu ? "nav-container active" : "nav-container"}>
          {NavBarItems.map((item, index) => (
            <Link
              key={index}
              className={item.cName}
              to={item.url}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                showNavBar();
              }}
            >
              {item.key}
            </Link>
          ))}
        </div> */}
      </nav>
    </>
  );
}

export default NavBar;

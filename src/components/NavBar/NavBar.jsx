// NavBar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { getNavBarItems } from "./NavBarItems";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { useTranslation } from "react-i18next";
import MenuWhite from "../../icons/menu_white.png";
import MenuCross from "../../icons/cross.png";
function NavBar() {
  const { t } = useTranslation("global");
  const navItems = getNavBarItems(t);
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setNavMenu(false);
    };

    document.body.style.overflow = navMenu ? "hidden" : "";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [navMenu]);

  const showNavBar = () => setNavMenu((isOpen) => !isOpen);
  return (
    <>
      <nav className="nav-wrapper">
        <div className="menu-title">
          <Link to="/">pod podom</Link>
        </div>
        <div
          id="main-navigation"
          className={navMenu ? "nav-container active" : "nav-container"}
          aria-hidden={!navMenu}
        >
          {navItems.map((item, index) => (
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
                setNavMenu(false);
              }}
            >
              {item.key}
            </Link>
          ))}
        </div>
        <a className="nav-icon" href="tel:+38631307279">
          {t("nav.naroci")}
        </a>
        <LanguageDropdown />
        <button
          type="button"
          className="menu-toggle"
          onClick={showNavBar}
          aria-label={navMenu ? "Zapri meni" : "Odpri meni"}
          aria-expanded={navMenu}
          aria-controls="main-navigation"
        >
          <img src={navMenu ? MenuCross : MenuWhite} alt="" aria-hidden="true" />
        </button>
      </nav>
    </>
  );
}

export default NavBar;

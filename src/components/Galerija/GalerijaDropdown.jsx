import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Galerija.css";

function GalerijaDropdown({ options, selectedValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("global");

  return (
    <div className="galerija-dropdown">
      {/* Toggle Button */}
      <button
        className="galerija-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {t(
          options.find((opt) => opt.id === selectedValue)?.key || "gallery.all"
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="galerija-dropdown-menu">
          {options.map((option) => (
            <li
              key={option.id}
              className={option.id === selectedValue ? "active" : ""}
              onClick={() => {
                onChange(option.id);
                setIsOpen(false);
              }}
            >
              {t(option.key)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GalerijaDropdown;

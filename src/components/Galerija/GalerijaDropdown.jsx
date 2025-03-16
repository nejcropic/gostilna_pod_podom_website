import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import "./Galerija.css";

function GalerijaDropdown({ options, selectedValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("global");

  const handleSelect = (optionId) => {
    onChange(optionId); // ✅ Update selected filter
    setIsOpen(false); // ✅ Close dropdown

    // ✅ Scroll with offset
    window.scrollTo({
      top: window.innerHeight / 3, // ✅ Scrolls down by 33vh
      behavior: "smooth",
    });
  };

  return (
    <div className="galerija-dropdown">
      {/* Animated Toggle Button */}
      <motion.button
        className="galerija-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      >
        {t(
          options.find((opt) => opt.id === selectedValue)?.key || "gallery.all"
        )}
      </motion.button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="galerija-dropdown-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {options.map((option) => (
              <motion.li
                key={option.id}
                className={option.id === selectedValue ? "active" : ""}
                onClick={() => handleSelect(option.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {t(option.key)}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GalerijaDropdown;

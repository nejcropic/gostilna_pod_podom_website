import React from "react";
import { motion } from "framer-motion";
import "./MeniFood.css";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function MeniFood({ title, translations }) {
  return (
    <motion.section
      className="meni-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
      <hr />

      <div className="meni-container">
        {Object.entries(translations).map(([key, item], index) => (
          <motion.div
            className={`meni-card ${!item.sestavine ? "lower" : ""}`}
            key={key}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="meni-text">
              <h3>{item.ime}</h3>
              {item.sestavine && <p>{item.sestavine}</p>}
              <span className="meni-price">{item.cena} €</span>
            </div>

            {item.slika && (
              <motion.img
                src={require(`../../meni/${item.slika}`)}
                alt={item.ime}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

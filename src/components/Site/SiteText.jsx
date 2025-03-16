import React from "react";
import "./SiteText.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { textUp, textLeftToCenter, fadeIn } from "../animations";

export default function SiteText({
  main,
  title,
  description,
  list,
  buttonText,
  link,
  adjust,
}) {
  return (
    <section className={`site-section ${adjust ? adjust : ""}`}>
      {" "}
      <div className="site-text">
        <motion.h3
          variants={textLeftToCenter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {main}
        </motion.h3>
        <motion.h1
          variants={textLeftToCenter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        {list && (
          <ul>
            {Object.values(list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      {buttonText && (
        <>
          <hr className="site-line" />{" "}
          <Link to={link}>
            <motion.div
              className="site-button"
              variants={textLeftToCenter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p>{buttonText}</p>
            </motion.div>
          </Link>
        </>
      )}
    </section>
  );
}

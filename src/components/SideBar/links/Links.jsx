import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const SideBarItems = [
  {
    title: "Domov",
    url: "/",
  },
  {
    title: "Galerija",
    url: "/galerija",
  },
  {
    title: "Meni",
    url: "/meni",
  },
  {
    title: "Okolica",
    url: "/okolica",
  },
  {
    title: "Lokacija",
    url: "/lokacija",
  },
];

const Links = ({ setOpen }) => {
  return (
    <motion.div className="links" variants={variants}>
      {SideBarItems.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(false)} // Close sidebar on click
        >
          <Link to={item.url}>{item.title}</Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SidebarData } from "./SidebarData";
import { IconPlaceholder, TextPlaceholder } from "./NavbarStyle";

const variants = {
  open: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    visibility: "visible",
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    visibility: "hidden",
  },
};

export const NavbarMenu = () => (
  <motion.ul variants={variants}>
    {SidebarData.map((item, index) => (
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        key={index}
      >
        <Link to={item.path}>
          <IconPlaceholder>{item.icon}</IconPlaceholder>
          <TextPlaceholder>{item.title}</TextPlaceholder>
        </Link>
      </motion.li>
    ))}
  </motion.ul>
);

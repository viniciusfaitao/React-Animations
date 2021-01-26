import React, { useContext } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarBackground, TextName } from "./NavbarStyle";
import { UserContext } from "../../contexts/UserContext";

const sidebar = {
  open: {
    clipPath: `circle(900px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { user } = useContext(UserContext);

  return (
    <NavbarBackground>
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
          <motion.div className="background" variants={sidebar} />
          <NavbarMenu />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </motion.div>

      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <TextName>
          Olá <h2> {user} </h2>
        </TextName>
      </motion.div>
    </NavbarBackground>
  );
};

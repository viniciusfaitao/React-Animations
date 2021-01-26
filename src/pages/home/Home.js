import { motion } from "framer-motion";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import { UserContext } from "../../contexts/UserContext";
import {
  BackgroundNavbarColor,
  Main,
  Section,
  Sticky,
  ApresentationText,
} from "./HomeStyle";
import { useViewportScroll, useTransform } from "framer-motion";
import { First } from "./_FirstAndSecond";
import { Third } from "./_Third";
import { Fourth } from "./_Fourth";
import { Fifth } from "./_Fifth";
import { ButtonBTT } from "../../components/backToTop/ButtonBTT";

export const Home = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const { scrollYProgress } = useViewportScroll();

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1]);
  const frameScale = useTransform(
    scrollYProgress,
    [0.558, 0.627],
    [0.511, 0.8]
  );

  if (!user) {
    console.log("User not found");
    history.push("/");
  }

  return (
    <Main style={{ height: "1610vh" }}>
      <Section style={{ height: "72.7%" }}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -2000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4 }}
        >
          <BackgroundNavbarColor />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -2000 }}
          animate={{ opacity: 1, y: 40 }}
          transition={{ duration: 3 }}
        >
          <ApresentationText>
            <h2>
              Bem vindo ao aplicativo de animações feito em React e Framer
              Motion
            </h2>
          </ApresentationText>
        </motion.div>

        <Sticky className="second">
          <First />
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100vh",
              borderRadius: "4px",
              border: "4px solid #fff",
              opacity: frameOpacity,
              scale: frameScale,
            }}
          />
        </Sticky>
      </Section>

      <Section style={{ height: "9.7%" }}>
        <Sticky className="third">
          <Third />
        </Sticky>
      </Section>

      <Section style={{ height: "10.1%" }}>
        <Sticky className="fourth">
          <Fourth />
        </Sticky>
      </Section>

      <Section style={{ height: "7.5%" }}>
        <Sticky className="fifth">
          <Fifth />
          <ButtonBTT />
        </Sticky>
      </Section>
    </Main>
  );
};

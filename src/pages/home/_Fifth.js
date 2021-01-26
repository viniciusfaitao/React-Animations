import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CustomRating } from "../../components/rating/CustomRating";
import { BackgroundFifth, Sticky } from "./HomeStyle";

const variants = {
  visible: { opacity: 1, y: 350, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 800 },
};

export const Fifth = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <BackgroundFifth>
      <Sticky
        className="fifth"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <CustomRating />
      </Sticky>
    </BackgroundFifth>
  );
};

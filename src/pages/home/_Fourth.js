import { motion, useAnimation } from "framer-motion";
import { wrap } from "popmotion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Sticky } from "./HomeStyle";
import { BackgroundFourth } from "./HomeStyle";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 600 },

  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Fourth = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

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
    <BackgroundFourth>
      <Sticky
        className="fourth"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
      >
        <h2>
          Aqui você pode brincar, mexa para cima, para baixo e arraste para os
          lados para trocar de imagem
        </h2>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial={"enter"}
          animate={"center"}
          exit={"exit"}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.1 },
          }}
          drag="x"
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{
            borderRadius: "4px",
            border: "30px solid #fff",
          }}
          drag={true}
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          size={150}
          radius={30}
          background={"#fff"}
        />
      </Sticky>
    </BackgroundFourth>
  );
};

const images = [
  "https://photos.smugmug.com/Wallpapers/i-Lw6hnGq/0/f91236c1/O/HDRshooter-4K-wallpaper-066-3840x2160.jpg",
  "https://www.setaswall.com/wp-content/uploads/2017/03/Artistic-Landscape-4K-Wallpaper-3840x2160.jpg",
  "https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/XboxOneX_33.jpg",
];

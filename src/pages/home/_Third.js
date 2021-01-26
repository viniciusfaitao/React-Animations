import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Sticky } from "./HomeStyle";
import { wrap } from "popmotion";
import { AiFillCaretRight } from "react-icons/ai";

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
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export const Third = () => {
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
    <Sticky
      className="third"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      <AnimatePresence initial={false} custom={direction}>
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
            opacity: { duration: 0.3 },
          }}
        />
      </AnimatePresence>

      <div className="next" onClick={() => paginate(1)}>
        <AiFillCaretRight />
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        <AiFillCaretRight />
      </div>
    </Sticky>
  );
};

const images = [
  "https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg",
  "https://wallpaperaccess.com/full/1101075.jpg",
  "https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg",
];

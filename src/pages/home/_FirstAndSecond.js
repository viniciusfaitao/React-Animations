import { useViewportScroll, useTransform, motion } from "framer-motion";
import { FaLevelDownAlt } from "react-icons/fa";
import { FirstText, Sticky } from "./HomeStyle";

export const First = () => {
  const { scrollYProgress } = useViewportScroll();
  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0]
  );

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1]
  );

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ["70vh", "100vh"]
  );

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511]
  );

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ["58vh", "0vh"]
  );

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ["0%", "-100%", "-100%", "-200%"]
  );

  return (
    <Sticky
      className="first"
      style={{
        borderRadius: firstRadius,
        scale: firstScale,
      }}
    >
      <motion.div
        className="offset"
        style={{
          y: offsetY,
        }}
      >
        <div className="a">
          <motion.div
            className="left-side"
            style={{
              height: leftSideHeight,
            }}
          />
          <FirstText>
            <h2>Apresentação de slides</h2>
            <h1>
              <FaLevelDownAlt />
            </h1>
          </FirstText>
          <div className="right-side">
            <motion.div
              className="right-image"
              style={{
                y: rightSideY,
                scale: rightSideScale,
              }}
            />
          </div>
        </div>

        <div className="b" />
        <div className="c" />
      </motion.div>
    </Sticky>
  );
};

import { motion } from "framer-motion";

import "./home-load-bar.styles.scss";

const HomeLoadBar = ({ delay, time }) => {
  return (
    <motion.div
      transition={{ duration: 0.6, delay: delay }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bar-container"
    >
      <motion.div
        className="progress"
        transition={{ ease: "linear", duration: time, delay: 3.7 }}
        initial={{ x: -350 }}
        animate={{ x: 0 }}
        exit={{ x: 350 }}
      ></motion.div>
    </motion.div>
  );
};

export default HomeLoadBar;

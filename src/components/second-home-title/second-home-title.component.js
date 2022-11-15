import { motion } from "framer-motion";

import HomeLoadBar from "../home-load-bar/home-load-bar.component";
import { description } from "../../utils/description";
import { titles } from "../../utils/titles";

import "./second-home-title.styles.scss";

const SecondHomeTitle = () => {
  const hover = {
    scale: 1.3,
    transition: { duration: 0.1 },
  };

  let delay = 1.5;

  return (
    <div className="home-title">
      <motion.div className="home second">
        <motion.h2
          className="home-title-intro"
          transition={{ ease: "easeInOut", duration: 0.8 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          I am a
        </motion.h2>
        <motion.div
          className="home-title-name"
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {titles.map((item, idx) => (
            <motion.div className={`${item.id}`} key={idx} whileHover={hover}>
              <h2>{item.letter}</h2>
            </motion.div>
          ))}
        </motion.div>
        <div className="description-container">
          {description.map((item, idx) => {
            delay += 0.03;
            return (
              <motion.div
                key={idx}
                className={`description ${item.id}`}
                transition={{ duration: 0.6, delay: delay }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {item.letter}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
      <HomeLoadBar delay={3} time={5} />
    </div>
  );
};

export default SecondHomeTitle;

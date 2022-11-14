import { motion } from "framer-motion";

import "./home.styles.scss";

const name = [
  { id: "one", letter: "I" },
  { id: "two", letter: "a" },
  { id: "three", letter: "m" },
  { id: "four", letter: "a" },
  { id: "five", letter: "f" },
  { id: "six", letter: "u" },
  { id: "seven", letter: "l" },
  { id: "eight", letter: "l" },
  { id: "nine", letter: "-" },
  { id: "ten", letter: "s" },
  { id: "eleven", letter: "t" },
  { id: "twelve", letter: "a" },
  { id: "thirt", letter: "c" },
  { id: "fourt", letter: "k" },
  { id: "fift", letter: "w" },
  { id: "sixt", letter: "e" },
  { id: "sevent", letter: "b" },
  { id: "eightt", letter: "d" },
  { id: "ninet", letter: "e" },
  { id: "twent", letter: "v" },
  { id: "twent1", letter: "e" },
  { id: "twent2", letter: "l" },
  { id: "twent3", letter: "o" },
  { id: "twent4", letter: "p" },
  { id: "twent5", letter: "e" },
  { id: "twent6", letter: "r" },
];

let delay = 0.5;

const HomeTitle = () => {
  const hover = {
    scale: 1.3,
    transition: { duration: 0.1 },
  };

  return (
    <div className="home-title">
      <motion.div className="home">
        <motion.h2
          className="home-title-intro"
          transition={{ ease: "easeInOut", duration: 0.8 }}
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -150 }}
        >
          My name is
        </motion.h2>
        <motion.div
          className="home-title-name"
          transition={{ ease: "easeInOut", duration: 0.8, delay: 0.5 }}
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -150 }}
        >
          <motion.div className="i" whileHover={hover}>
            <h2>I</h2>
          </motion.div>
          <motion.div className="s" whileHover={hover}>
            <h2>s</h2>
          </motion.div>
          <motion.div className="a" whileHover={hover}>
            <h2>a</h2>
          </motion.div>
          <motion.div className="i-2" whileHover={hover}>
            <h2>í</h2>
          </motion.div>
          <motion.div className="c" whileHover={hover}>
            <h2>C</h2>
          </motion.div>
          <motion.div className="a-2" whileHover={hover}>
            <h2>a</h2>
          </motion.div>
          <motion.div className="s-2" whileHover={hover}>
            <h2>s</h2>
          </motion.div>
          <motion.div className="t" whileHover={hover}>
            <h2>t</h2>
          </motion.div>
          <motion.div className="r" whileHover={hover}>
            <h2>r</h2>
          </motion.div>
          <motion.div className="o" whileHover={hover}>
            <h2>o</h2>
          </motion.div>
          <motion.div
            transition={{
              ease: "easeInOut",
              duration: 0.8,
              delay: 3,
            }}
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -150 }}
            className="hover-me"
          >
            <motion.p
              className="hover-me-p"
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                duration: 0.8,
                delay: 3,
                repeatType: "reverse",
              }}
              initial={{ x: 10 }}
              animate={{ x: 0 }}
              exit={{ x: 10 }}
            >
              Hover me!
            </motion.p>
          </motion.div>
        </motion.div>
        <div className="description-container">
          {name.map((item, idx) => {
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
    </div>
  );
};

export default HomeTitle;

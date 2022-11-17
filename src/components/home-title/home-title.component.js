import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useState, useRef } from "react";

import HomeLoadBar from "../home-load-bar/home-load-bar.component";

import "./home-title.styles.scss";

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

const HomeTitle = () => {
  //   const ref = useRef();

  //   // Stores the start and end scrolling position for our container
  //   const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  //   const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);

  //   const { scrollY, scrollYProgress } = useScroll();

  //   // Use the container's start/end position percentage
  //   const scale = useTransform(
  //     scrollYProgress,
  //     [scrollPercentageStart, scrollPercentageEnd],
  //     [1, 0.5]
  //   );

  //   console.log("scrollYProgress", scrollYProgress);
  //   console.log("scrollPercentageStart", scrollPercentageStart);
  //   console.log("scrollPercentageEnd", scrollPercentageEnd);

  //   useLayoutEffect(() => {
  //     // Get the distance from the start of the page to the element start
  //     const rect = ref.current.getBoundingClientRect();
  //     console.log("rect", rect);
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     console.log("scrollTop", scrollTop);

  //     const offsetStart = rect.top + scrollTop;
  //     const offsetEnd = offsetStart + rect.height;
  //     console.log("offsetStart", offsetStart);
  //     console.log("offsetEnd", offsetEnd);

  //     const elementScrollStart = offsetStart / document.body.clientHeight;
  //     const elementScrollEnd = offsetEnd / document.body.clientHeight;

  //     setScrollPercentageStart(elementScrollStart);
  //     setScrollPercentageEnd(elementScrollEnd);
  //   });

  const hover = {
    scale: 1.3,
    transition: { duration: 0.1 },
  };

  let delay = 1.5;

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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
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
      <HomeLoadBar delay={3.7} time={5} />
    </div>
  );
};

export default HomeTitle;

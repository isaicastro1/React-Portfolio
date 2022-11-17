import { useRef, useState, useLayoutEffect, useEffect } from "react";

import { useTransform, useScroll } from "framer-motion";

import { useInView, InView } from "react-intersection-observer";

import "./project-container.styles.scss";

const ProjectContainer = () => {
  //   const ref = useRef();

  const { inView, ref, entry } = useInView({
    /* Optional options */
    threshold: 1,
  });

  window.addEventListener("scroll", () => {
    if (inView) {
      document.body.classList.add("noScroll");
    }
  });

  //   const [offset, setOffset] = useState(null);

  //   useLayoutEffect(() => {
  //     const rect = ref.current.getBoundingClientRect();
  //     console.log(window.scrollY);
  //     console.log("tect.top", rect.top);
  //     const offsetStart = rect.top + window.scrollY;

  //     window.addEventListener("scroll", () => {
  //       setOffset(rect.top);
  //       if (offset === 2) {
  //         document.body.classList.add("noScroll");
  //         console.log("yes");
  //       }
  //     });
  //   });

  return (
    <>
      <InView>
        <div className="projects-container">
          <div className="project" ref={ref}>
            <h1>I am a project</h1>
          </div>
          <div className="project">
            <h1>I am a project</h1>
          </div>
          <div className="project">
            <h1>I am a project</h1>
          </div>
        </div>
      </InView>
      <div className="project">
        <h1>I am a project</h1>
      </div>
    </>
  );
};

export default ProjectContainer;

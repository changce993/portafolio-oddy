"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { SplitText } from "gsap/dist/SplitText";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText)

const useSmoothScroll = () => {
  const fadeIn = (el) => {
    gsap.fromTo(el, {
      scale: .8,
      yPercent: 20,
      opacity: 0,
    }, {
      scale: 1,
      yPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: el,
        scrub: 1,
        // start: "top bottom+=200px",
        // end: "bottom bottom-800px",
      },
      duration: .7,
      ease: "expo.out"
    })
  }

  useEffect(() => {
    if (document) {
      const scrolllines = document.querySelectorAll(".js-s-lines")

      scrolllines.forEach((el) => {
        const mySplitText = new SplitText(el, { type: "lines", linesClass: "overflow-hidden" }).lines;
        const lines = new SplitText(mySplitText, { type: "lines" }).lines;
        
        const delay = el?.dataset?.delay || 0;
        const scale = el?.dataset?.scale || 1;
        const start = el?.dataset?.start || "110%";
        const end = el?.dataset?.end || "90%";
  
        gsap.fromTo(lines, {
          lazy: false,
          yPercent: 120,
          scale,
        }, {
          yPercent: 0,
          scale: 1,
          stagger: 0.09,
          ease: "Power4.easeInOut",
          duration: 1.7,
          delay: delay,
          marker: true,
          scrollTrigger: {
            trigger: el,
            scrub: 2,
            toggleActions: "play play play reverse",
            start: `top ${start}`,
            end: `bottom ${end}`,
          }
        })
      })
    }
  }, [])

  return {
    fadeIn
  }
}

export default useSmoothScroll
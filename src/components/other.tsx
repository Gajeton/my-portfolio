'use client'
import { useEffect } from "react";
import {  other } from "../data";
import CardOther from "./CardOther/card-other";
import AnimateCard from "./shared/animated-card";
import PopBox from "./shared/animated-card";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import AnimatedTitle from "./shared/animated-title";

export default function Other() {

  const controls = useAnimation();

  const cardVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.8 }
  };

  const [ref, inView] = useInView({ threshold: 0, triggerOnce: false });


  useEffect(() => {
    inView ? controls.start("visible"):controls.start('hidden')
  }, [controls, inView]);

  
  const others = other; 
  return (
    <section
      id="other-section"
      className="max-w-screen-lg mx-auto  md:py-14 relative"
    >
      <AnimatedTitle title="other."></AnimatedTitle>
      <div className="flex justify-between">
        <AnimateCard style="flex w-1/4">
          <CardOther data={others[1]} title="PODCASTS" />
        </AnimateCard>
        <AnimateCard style="flex w-1/4">
          <CardOther
            data={others[0]}
            title="ACADEMIC PROJECT"
            isSecond={true}
          />
        
        </AnimateCard>
        <div className="w-1/4 h-72"></div>
      </div>
    </section>
  );
}

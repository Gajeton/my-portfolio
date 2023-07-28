'use client'
import React, { ReactNode, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EducationProps, ExperienceProps } from "@/src/data";


type AnimatedCardProps = {
    children: ReactNode,
    style?: string,
} 
function AnimatedCard({ children, style=""}: AnimatedCardProps) {
  const cardVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.8 }
  };

  const [ref, inView] = useInView({ threshold: 0, triggerOnce: false });

  const controls = useAnimation();

  useEffect(() => {

    inView ? controls.start("visible"):controls.start('hidden')
  }, [controls, inView]);

  return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={cardVariants}
        className={style}
      > 
        {children}
      </motion.div>
  );
}

export default AnimatedCard;


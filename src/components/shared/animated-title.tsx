'use client'
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


type AnimatedTitleProps = {
    title: string,
} 
function AnimatedTitle({title}: AnimatedTitleProps) {
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
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={cardVariants}
          className="text-black mb-4 font-rocletteBold text-3xl resp:text-2xl resp:mt-4"
        >
        {title}
        </motion.h1>
  );
}

export default AnimatedTitle;


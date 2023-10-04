'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


interface CardEducationProps {
    title:string,
    subTitle: string,
    content:string[]
}

function CardEducation({content, title, subTitle}: CardEducationProps) {

  const cardVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.8 }
  };

  const [ref, inView] = useInView({ threshold: 0, triggerOnce: false });

  const controls = useAnimation();

  useEffect(() => {

    inView ? controls.start("visible"):controls.start('hidden')
  }, [controls, inView]);

  return (
      <div className="flex-col md:p-12 resp:py-4 resp:px-6 bg-white text-black shadow-xl">
        <h1 className="font-rocletteBold text-2xl resp:text-xl text-black">{title}</h1>
        <h2 className="font-roclette text-xl resp:text-lg text-black ">{subTitle}</h2>
        <ul className="list-disc font-roclette text-lg tracking-widest pl-5q">
          {content.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
  );
}

export default CardEducation;

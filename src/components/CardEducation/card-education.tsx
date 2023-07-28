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
      <div className="flex-col md:p-12 bg-white text-black shadow-xl">
        <h1 className="font-rocletteBold text-2xl text-black">{title}</h1>
        <h2 className="font-economicaBold text-xl text-black ">{subTitle}</h2>
        <ul className="list-disc font-economicaBold text-lg tracking-widest">
          {content.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
  );
}

export default CardEducation;
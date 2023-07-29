import { motion, AnimatePresence } from "framer-motion"
  import { useState } from "react"
  
  import { FAQ } from "../types/types"
  import { defaultFAQs } from "./shared/defaultValue"
  import { More, Less } from "./shared/svg"
import AnimatedCard from "./shared/animated-card"
import { ExperienceProps, experience } from "../data"
import CardChildren from "./CardExperience/card-children"
import AnimatedTitle from "./shared/animated-title"
  
  const ExperienceItem = (props: ExperienceProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const parentsVariants = {
      animate: {
        zIndex: 1,
        rotate: 0,
        transition: {
          type: "tween",
          duration: 0.15,
          ease: "circOut",
        },
      },
      exit: {
        zIndex: 0,
        rotate: isOpen ? -90 : 90,
        transition: {
          type: "tween",
          duration: 0.15,
          ease: "circIn",
        },
      },
      initial: {
        rotate: isOpen ? -90 : 90,
      },
    };

    const childVariants = {
      animate: {
        height: "auto",
        opacity: 1,
        transition: {
          height: {
            duration: 0.4,
          },
          opacity: {
            duration: 0.25,
            delay: 0.15,
          },
        },
      },
      exit: {
        height: 0,
        opacity: 0,
        transition: {
          height: {
            duration: 0.4,
          },
          opacity: {
            duration: 0.25,
          },
        },
      },
      initial: {
        height: 0,
        opacity: 0,
      },
    };
        
    return (
      <div
        className="flex flex-col w-full bg-white shadow-lg p-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-col justify-start">
            <motion.h1 className="font-roclette lowercase font-normal text-start text-6xl leading-[4rem]  text-black">
              {props.title}
            </motion.h1>
            <motion.h2 className="font-roclette  text-xl leading-none text-start text-black ">
              {props.subTitle}
            </motion.h2>
          </div>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "minus" : "plus"}
              initial="initial"
              variants={parentsVariants}
              animate="animate"
              exit="exit"
            >
              {isOpen ? <Less /> : <More />}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              key="test"
              className="flex "
              variants={childVariants}
            >
              <div className=" text-xl leading-7 font-economicaBold m-4">
                <CardChildren data={props.children} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default function Experience () {
    const experiences = experience;
    return (
      <>
      <section id="experience-section" className=" md:max-w-screen-lg md:mx-auto md:py-14 relative">
        <AnimatedTitle title="experience."></AnimatedTitle>
        <div className="flex flex-col w-full  justify-center items-center space-y-7">
          {experiences.map((c, i) => (
            <ExperienceItem
              key={i}
              title={c.title}
              subTitle={c.subTitle}
              children={c.children}
            />
          ))}
        </div>
        </section>
      </>
    );
  };
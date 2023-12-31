"use client";

import { ProjectProps, projects } from "@/src/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimateCard from "../shared/animated-card";
import AnimatedTitle from "../shared/animated-title";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function CardProject({ title, link, id, path, mainTech, release }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseEnter() {
    setIsHovered(!isHovered);
  }

  function handleMouseLeave() {
    setIsHovered(!isHovered);
  }
  const projectVariants = {
    hover: {
      scale: 1.03,
      opacity: 0.2,
    },

    tape: {
      scale: 1,
    },
  };
  return (
    <AnimateCard id={title} style="flex bg-white resp:my-3 w-[40%] resp:w-[80%] mt-6">
      <AnimatePresence>
        <motion.div className="flex flex-col m-1 ">
          <div className="flex items-center justify-between h-1/3">
            <h1 className="text-3xl font-rocletteBold p-1 ">{title}</h1>
            <div className="flex items-center">
              {mainTech &&
                mainTech.map((res) => {
                  return <Image alt="techno.name" width={32} height={32} src={res.path} title={res.title} key={res.title} className="p-1 w-8 h-8"></Image>;
                })}
            </div>
          </div>
          <motion.div
            key={id}
            className="container-image relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && release && (
              <h1 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center font-rocletteBold text-2xl">
                preview
                <BsArrowUpRight />
              </h1>
            )}
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={projectVariants}
            >
              {path && release &&
                <a href={link}>
                  <Image alt="" src={path} width={400} height={256} />
                </a>}
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </AnimateCard>
  );
}

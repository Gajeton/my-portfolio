"use client";

import { ProjectProps, projects } from "@/src/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimateCard from "../shared/animated-card";
import AnimatedTitle from "../shared/animated-title";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function CardProject({ title, link, id, path, mainTech }: ProjectProps) {
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
    <AnimateCard style="flex bg-white resp:my-3">
      <AnimatePresence>
        <motion.div className="flex flex-col m-1">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-rocletteBold p-1 ">{title}</h1>
            <div className="flex items-center">
              {mainTech &&
                mainTech.map((res) => {
                  return (
                    <Image
                      alt=""
                      src={res}
                      width={30}
                      height={30}
                      className="p-1"
                    ></Image>
                  );
                })}
            </div>
          </div>
          <motion.div
            key={id}
            className="container-image relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
           
          >
            {isHovered && (
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
              <a href={link}>
                <Image src={path} width={400} height={400}  alt={""}></Image>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </AnimateCard>
  );
}

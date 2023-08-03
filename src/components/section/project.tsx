'use client'

import { projects } from "@/src/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimateCard from '../shared/animated-card';
import AnimatedTitle from "../shared/animated-title";
import Image from 'next/image'
import { BsArrowUpRight } from "react-icons/bs";
import CardProject from "../CardProject/card-project";



export default function Project() {

   
  const project = projects
  return (
    <section id="project-section" className=" my-14">
      <AnimatedTitle title="project."></AnimatedTitle>
      <div className="flex justify-between flex-wrap">
      {project.map(res => {
        return (
          <CardProject title={res.title} path={res.path} link={res.link} id={res.id} mainTech={res.mainTech}></CardProject>
        );
      })}
      </div>
    </section>
  );
}

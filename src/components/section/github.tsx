'use client'

import { gitHubProjects, projects } from "@/src/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AnimateCard from '../shared/animated-card';
import AnimatedTitle from "../shared/animated-title";
import Image from 'next/image'
import { BsArrowUpRight } from "react-icons/bs";
import CardProject from "../CardProject/card-project";
import CardGithub from "../CardGithub/card-github";



export default function Github() {

  const project = gitHubProjects
  return (
    <section id="ongoing-section" className=" my-14">
      <AnimatedTitle title="ongoing project."></AnimatedTitle>
      <div className="flex justify-between flex-wrap resp:flex-col resp:items-center">
      {project.map(res => {
        return (
          <CardGithub  link={res.link} id={res.id} mainTech={res.mainTech} text={res.text} />
        );
      })}
      </div>
    </section>
  );
}

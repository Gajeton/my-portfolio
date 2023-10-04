'use client'

import { projects } from "@/src/data";
import CardProject from "../CardProject/card-project";
import AnimatedTitle from "../shared/animated-title";



export default function Project() {

   
  const project = projects
  return (
    <section id="project-section" className=" my-14">
      <AnimatedTitle title="project."></AnimatedTitle>
      <div className="flex justify-between flex-wrap resp:flex-col resp:items-center">
      {project.map(res => {
        return (
          <CardProject release={res.release} title={res.title} path={res.path} link={res.link} id={res.id} mainTech={res.mainTech}></CardProject>
        );
      })}
      </div>
    </section>
  );
}

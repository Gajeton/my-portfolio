'use client'

import { exploreFile } from "@/src/data";
import CardFile from "../CardFile/card-file";
import AnimatedTitle from "../shared/animated-title";
import Roots from "../FileExplorer/roots";
import AnimateCard from '../shared/animated-card';




export default function Skills() {

  const files = exploreFile
  return (
    <section
      id="skills-section"
      className=" max-w-screen-lg mx-auto md:py-14 relative"
    >
      <AnimatedTitle title="skills."></AnimatedTitle>
      <AnimateCard>
        <CardFile>
          <Roots files={files} />
        </CardFile>
      </AnimateCard>
    </section>
  );
}

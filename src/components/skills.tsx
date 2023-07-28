'use client'

import { ExploreFileProps, exploreFile } from "../data"
import CardFile from "./CardFile/card-file"
import Roots from "./FileExplorer/roots"
import AnimateCard from "./shared/animated-card"
import AnimatedTitle from "./shared/animated-title"

export default function Skills() {

  const files = exploreFile
  return (
    <section
      id="skills-section"
      className=" max-w-screen-lg mx-auto py-16 md:py-20 lg:py-28"
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

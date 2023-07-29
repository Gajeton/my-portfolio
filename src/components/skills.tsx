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

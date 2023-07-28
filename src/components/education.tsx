'use client'
import { eudcation, experience } from "../data";
import CardEducation from "./CardEducation/card-education";
import CardExperience from "./CardExperience/card-experience";
import AnimateCard from "./shared/animated-card";
import AnimatedTitle from "./shared/animated-title";

export default function Education() {
  const educations = eudcation;
  return (
    <section id="education-section" className=" md:max-w-screen-lg md:mx-auto py-16 md:py-20 lg:py-28">
      <AnimatedTitle title="education."></AnimatedTitle>
      <div className="flex justify-between flex-wrap">
      {educations.map(x => {
        return (
          <AnimateCard style="w-1/4">
            <CardEducation
              title={x.title}
              subTitle={x.subTitle}
              key={x.id}
              content={x.content}
            ></CardEducation>
          </AnimateCard>
        );
      }
      )}
        </div>
    </section>
  )
}
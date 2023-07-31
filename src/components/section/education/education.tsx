'use client'
import { eudcation, experience } from "../../../data";
import CardEducation from "../../CardEducation/card-education";
import CardExperience from "../../CardExperience/card-experience";
import AnimateCard from "../../shared/animated-card";
import AnimatedTitle from "../../shared/animated-title";
import styles from './style.module.css'
export default function Education() {
  const educations = eudcation;
  return (
    <section id="education-section" className=" md:max-w-screen-lg md:mx-auto relative">
      <AnimatedTitle title="education."></AnimatedTitle>
      <div className={`${styles.container}`}>
      {educations.map(x => {
        return (
          <AnimateCard style={`${styles.item}`}>
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
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
    <section id="education-section">
      <AnimatedTitle title="education."></AnimatedTitle>
      <div className={`${styles.container} resp:flex-col resp:w-full`}>
      {educations.map(x => {
        return (
          <AnimateCard id={6} style={`${styles.item}`}>
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
'use client'



import Education from '@/src/components/section/education/education'
import Experience from '@/src/components/section/experience'
import Hero from '@/src/components/section/hero'
import Other from '@/src/components/section/other/other'
import Skills from '@/src/components/section/skills'
import Footer from '@/src/components/ui/Footer/footer'
import BackToTop from '@/src/components/ui/back-to-top'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export default function Home() {

  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Other />
      <Footer />
      <BackToTop />
    </>
  )
}

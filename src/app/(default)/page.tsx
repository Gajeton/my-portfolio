'use client'


import Education from '@/src/components/education'
import Experience from '@/src/components/experience'
import Hero from '@/src/components/hero'
import Other from '@/src/components/other'
import Skills from '@/src/components/skills'
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

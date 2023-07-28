'use client'
import PhotoAntoine from '../../public/images/antoine-cv.jpg';
import overlay from '../../public/images/overlay.jpeg';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimateCard from './shared/animated-card';
import Header from './ui/Header/header';
export default function Hero() {
  const ref = useRef(null);


  return (
    <section id="summary-section" className="max-w-screen-lg mx-auto">
      <AnimateCard>
      <div className="flex justify-between">
        <h2 className=" font-economicaBold text-4xl tracking-[.2em] text-white ">
          antoine familiar.
        </h2>
        <motion.div
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 1 }}
          className="bg-black text-white font-roclette lowercase text-sm flex mt-2"
        >
          <span className="self-center p-2 justify-start uppercase font-economicaBold">
            contact me.
          </span>
        </motion.div>
        {/* <div className="bg-black text-white font-roclette lowercase text-sm flex mt-2"></div> */}
      </div>
      </AnimateCard>
      <AnimateCard>
      <div className="flex flex-col">
        <h1 className=" font-roclette tracking-[-.06em] leading-none lowercase text-7xl text-black md:w-1/2">
          WEB FULLSTACK DEVELOPER / PROJECT MANAGER.
        </h1>
        <div className="flex justify-end md:mt-[-6em] md:ml-[2em]">
          <div className="font-rocletteSBoldItalic w-1/2 text-lg justify-end text-white lowercase md:pt-10 pr-8 md:self-end md:text-justify">
            26-year-old Full Stack Developer, experienced and specialized in web
            application development, with a strong command of languages and
            frameworks such as C#, .NET Core, Java, Spring Boot, and Angular. I
            also have initial experience in Agile project management. Currently,
            I have a desire to further deepen my academic knowledge in these
            fields while being motivated to explore new disciplines. I am
            excited about the opportunity to apply my development skills to
            these new perspectives.
          </div>
          {/* <Image
            className="picture"
            src={PhotoAntoine}
            width={250}
            height={200}
            alt="CV"
          /> */}
        </div>
        <Header />
      </div>
      </AnimateCard>
      
    </section>
  );
}

'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import AnimateCard from '../shared/animated-card';
import Header from '../ui/Header/header';
import PhotoAntoine from '../../../static/public/images/antoine-cv.jpg'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef(null);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);


  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();
    
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="summary-section">
      <AnimateCard>
        <div className="flex justify-between">
          <h2 className=" font-economicaBold resp:text-3xl text-4xl tracking-[.2em] text-white ">
            antoine familiar.
          </h2>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-black text-white font-roclette lowercase text-sm flex  "
            href='#contact-section'
          >
            <span className="self-center p-2 justify-start uppercase font-economicaBold">
              contact me.
            </span>
          </motion.a>
          
          <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          {/* <div className="bg-black text-white font-roclette lowercase text-sm flex mt-2"></div> */}
        </div>
      </AnimateCard>
      <div className="flex flex-col">
        <AnimateCard>
          <h1 className=" font-roclette tracking-[-.05em] leading-none lowercase text-7xl resp:text-5xl resp:mt-5 text-black md:w-1/2">
            WEB FULLSTACK DEVELOPER/PROJECT MANAGER.
          </h1>
        </AnimateCard>
        <AnimateCard style='flex justify-end md:ml-[2em] md:mt-[-2em] md:w-[75%] md:self-end resp:mt-5 resp:flex resp:flex-col-reverse '>
            <div className="font-rocletteSBoldItalic w-full text-lg  resp:text-base justify-end self-center tracking-[.02em] text-black lowercase text-justify">
              <div
                className="w-full group relative bg-[#D3D3D3] px-4 mt-[-3px]"
                onMouseMove={handleMouseMove}
              >
                <motion.div
                  className="pointer-events-none absolute -inset-px  opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: useMotionTemplate`
                    radial-gradient(
                    450px circle at ${mouseX}px ${mouseY}px,
                    rgba(14,13,13,0.2),
                    transparent 90%
                  )
                `,
                  }}
                />
                26-year-old Full Stack Developer, experienced and specialized in
                web application development, with a strong command of languages
                and frameworks such as C#, .NET Core, Java, Spring Boot, and
                Angular. I also have initial experience in Agile project
                management. Currently, I have a desire to further deepen my
                academic knowledge in these fields while being motivated to
                explore new disciplines. I am excited about the opportunity to
                apply my development skills to these new perspectives.
              </div>
            </div>
            <Image src={PhotoAntoine} className="h-full  w-1/3  resp:w-1/2 resp:self-center resp:mb-4" alt="CV"></Image>
        </AnimateCard>
      </div>
      <AnimateCard>
        <Header />
      </AnimateCard>
    </section>
  );
}

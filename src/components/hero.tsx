'use client'
import PhotoAntoine from '../../public/images/antoine-cv.jpg';
import overlay from '../../public/images/overlay.jpeg';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimateCard from './shared/animated-card';
import Header from './ui/Header/header';
export default function Hero() {
  const ref = useRef(null);
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="summary-section" className="max-w-screen-lg mx-auto ">
      <AnimateCard>
        <div className="flex justify-between ">
          <h2 className=" font-economicaBold text-4xl tracking-[.2em] text-white ">
            antoine familiar.
          </h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="bg-black text-white font-roclette lowercase text-sm flex mt-2"
          >
            <span className="self-center p-2 justify-start uppercase font-economicaBold">
              contact me.
            </span>
          </motion.button>
          {/* <div className="bg-black text-white font-roclette lowercase text-sm flex mt-2"></div> */}
        </div>
      </AnimateCard>
      <AnimateCard>
        <div className="flex flex-col">
          <h1 className=" font-roclette tracking-[-.06em] leading-none lowercase text-7xl text-black md:w-1/2">
            WEB FULLSTACK DEVELOPER / PROJECT MANAGER.
          </h1>
          <div className="flex justify-end md:mt-[-4em] md:ml-[2em] md:w-2/3 md:self-end">
            <div className="font-rocletteSBoldItalic w-full text-lg justify-end tracking-[.02em] text-black lowercase md:text-justify">
              <div
                className="w-full group relative bg-[#D3D3D3] px-4 py-4"
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

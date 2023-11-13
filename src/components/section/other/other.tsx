import { other } from "@/src/data";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedCard from "../../shared/animated-card";
import AnimatedTitle from "../../shared/animated-title";
import OtherModal from "./other-modal";
import { BsArrowUpRight } from "react-icons/bs";

interface OtherItemProps {
  title:string
}


export default function Other() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const openModal1 = () => {
    setIsModalOpen(true);
  };

  const closeModal1 = () => {
    setIsModalOpen(false);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const others = other; 
  return (
    <>
      <section
        id="other-section"
        className=" md:max-w-screen-lg md:mx-auto"
      >
        <AnimatedTitle title="other."></AnimatedTitle>
        <div className="flex">
          <AnimatedCard id={1} style="flex bg-white justify-center items-center w-1/3 mr-10 h-60 resp:h-32 ">
            <button onClick={openModal1} className="w-full flex justify-center h-full ">
              <motion.h1 className="  relative font-roclette lowercase font-normal text-start text-4xl resp:text-2xl leading-[4rem] self-center  text-black">
                podcast.
              </motion.h1>
              <BsArrowUpRight className="font-roclette lowercase font-normal text-center self-center text-3xl leading-[4rem] resp:leading-[1.2rem] resp:text-2xl  text-black"/>
            </button>
          </AnimatedCard>
          <AnimatedCard id={4} style="flex bg-white justify-center items-center w-1/3 h-60 resp:h-32" >
            <button onClick={openModal2} className="flex justify-center h-full w-full">
              <motion.h1 className="font-roclette lowercase font-normal text-center self-center text-4xl leading-[4rem] resp:leading-[1.2rem] resp:text-2xl  text-black">
                academic project.
              </motion.h1>
              <BsArrowUpRight className="font-roclette lowercase font-normal text-center self-center text-3xl leading-[4rem] resp:leading-[1.2rem] resp:text-2xl  text-black"/>
            </button>
          </AnimatedCard>
        </div>
        {isModalOpen && (
          <OtherModal
            style="h-[90%] resp:h-[70%]"
            label="podcast."
            data={others[1]}
            closeModal={closeModal1}
          />
        )}
        {isModalOpen2 && (
          <OtherModal
          style="h-fit"
            label="academic project."
            data={others[0]}
            closeModal={closeModal2}
          />
        )}
      </section>
    </>
  );
}

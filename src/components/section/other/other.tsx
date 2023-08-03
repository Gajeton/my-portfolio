import { OtherProps, OthersProps, other } from "@/src/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CardOther from "../../CardOther/card-other";
import AnimatedTitle from "../../shared/animated-title";
import OtherModal from "./other-modal";
import AnimatedCard from "../../shared/animated-card";

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
          <AnimatedCard style="flex bg-white justify-center items-center w-1/3 mr-10 h-60 resp:h-32">
            <div onClick={openModal1} className="w-full flex justify-center">
              <motion.h1 className="font-roclette lowercase font-normal text-start text-5xl resp:text-2xl leading-[4rem]  text-black">
                podcast.
              </motion.h1>
            </div>
          </AnimatedCard>
          <AnimatedCard style="flex bg-white justify-center items-center w-1/3 h-60 resp:h-32">
            <div onClick={openModal2} className="w-full flex justify-center">
              <motion.h1 className="font-roclette lowercase font-normal text-center text-5xl leading-[4rem] resp:leading-[1.2rem] resp:text-2xl  text-black">
                academic project.
              </motion.h1>
            </div>
          </AnimatedCard>
        </div>
        {isModalOpen && (
          <OtherModal
            style="h-[90%]"
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

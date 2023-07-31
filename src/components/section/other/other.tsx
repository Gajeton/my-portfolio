import { OtherProps, OthersProps, other } from "@/src/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CardOther from "../../CardOther/card-other";
import AnimatedTitle from "../../shared/animated-title";
import OtherModal from "./other-modal";

interface OtherItemProps {
  title:string
}

const OtherItem = ({ title }: OtherItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hover: {
      width: '100%',
      heigth: 500,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      }
    },
  };
  const parentsVariants = {
    animate: {
      zIndex: 1,
      rotate: 0,
      transition: {
        type: "tween",
        duration: 0.15,
        ease: "circOut",
      },
    },
    exit: {
      zIndex: 0,
      rotate: isOpen ? -90 : 90,
      transition: {
        type: "tween",
        duration: 0.15,
        ease: "circIn",
      },
    },
    initial: {
      rotate: isOpen ? -90 : 90,
    },
  };

  const childVariants = {
    animate: {
      opacity: 1,
      transition: {
        opacity: {
          duration: 0.25,
          delay: 0.4,
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.25,
        },
      },
    },
    initial: {
      height: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="bg-white relative"
      whileHover="hover"
      variants={containerVariants}
      onMouseEnter={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col justify-start">
          <motion.h1 className="font-roclette lowercase font-normal text-start text-6xl leading-[4rem]  text-black">
            {title}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default function Other() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const others = other; 
  return (
    <>
      <section
        id="other-section"
        className=" md:max-w-screen-lg md:mx-auto md:py-14 relative"
      >
        <AnimatedTitle title="other."></AnimatedTitle>
        {/* <div className="flex justify-between flex-wrap">
          <OtherItem title="podcast" data={others[1]} id={1} />
          <OtherItem title="academic project" data={others[0]} id={2} />
          
        </div> */}
        <button
          className=""
          onClick={openModal}
        >
          <OtherItem title="podcast" />
        </button>
        {isModalOpen && <OtherModal label="podcast." data={others[1]} closeModal={closeModal} />}
      </section>
    </>
  );
}

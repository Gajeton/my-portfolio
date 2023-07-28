
import { OtherProps } from '@/src/data';
import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardOtherPops {
    title:string,
    isSecond?:boolean,
    data: OtherProps
}

const CardOther = ({isSecond=false, title, data}: CardOtherPops) => {

  const [isHovered, setIsHovered] = useState(true);
  const controls = useAnimation();

  const cardVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.8 }
  };

  const [ref, inView] = useInView({ threshold: 0, triggerOnce: false });


  useEffect(() => {
    inView ? controls.start("visible"):controls.start('hidden')
  }, [controls, inView]);

  // const handleHoverStart = () => {
  //   setIsHovered(true);
  // };

  // const handleHoverEnd = () => {
  //   setIsHovered(false);
  // };
  // const hoverVariants = {
  //   hover: {
  //     originX: 0,
  //     width: "100%",
  //     transition: { delay: 0.08, duration: 0.2 },
  //   },
  // };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="bg-white flex justify-center items-center text-black shadow-xl w-[100%]"
      // whileHover="hover"
      // variants={hoverVariants}
      // animate={{ marginLeft: isHovered && !isSecond ? "-48em" : 0 }}
      // onMouseEnter={handleHoverStart}
      // onMouseLeave={handleHoverEnd}
    >
      {!isHovered ? (
        <div className="flex-col md:p-28 ">
          <h1 className="font-roclette text-center text-4xl text-black">
            {title}
          </h1>
        </div>
      ) : (
        <div>
          <ul>
            {data.title.map((res) => (
              <li>{res}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default CardOther;
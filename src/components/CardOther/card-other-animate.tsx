
import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface CardOtherAnimatePops {
    title:string,
    children: ReactNode,
    className?: string,
    isSecond:boolean,
    data: string[]
}

const CardOtherAnimate = ({ className, isSecond=false, title, data}: CardOtherAnimatePops) => {

  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();


  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };
  const hoverVariants = {
    hover: {
      originX: 0,
      scaleX: 4,
      transition: {delay: 0.08, duration: 0.9}
    },
  };

  return (
    <motion.div
    
      className="bg-white flex justify-center items-center text-black shadow-xl w-1/4"
      whileHover="hover"
      variants={hoverVariants}
      animate={{ marginLeft: isHovered && !isSecond ? "-48em" : 0 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {isHovered ?
      <div
        className="flex-col md:p-28 "
      >
        <h1 className="font-roclette text-center text-4xl text-black">
          {title}
        </h1>
      </div>
     :
     <div>
        <ul>
        {data.map(x => <li key={x}>{x}</li>)}
        </ul>
     </div>
    }
    </motion.div>
  );
};

export default CardOtherAnimate;
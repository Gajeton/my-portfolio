
import { OtherProps } from '@/src/data';
import { motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardOtherPops {
    isSecond?:boolean,
    data: OtherProps
}

const CardOther = ({isSecond=false, data}: CardOtherPops) => {

  return (
    <motion.div
      className="bg-white text-black"
      // whileHover="hover"
      // variants={hoverVariants}
      // animate={{ marginLeft: isHovered && !isSecond ? "-48em" : 0 }}
      // onMouseEnter={handleHoverStart}
      // onMouseLeave={handleHoverEnd}
    >
        <div>
          <ul>
            {data.title.map((res) => (
              <li key={res.text}>{res.text}</li>
            ))}
          </ul>
        </div>
    </motion.div>
  );
};

export default CardOther;
'use client'

import { ExperienceChildContentProps, ExperienceProps } from "@/src/data";
import { ReactElement, ReactNode, useState } from "react";
import CardExperienceList from "./card-epxerience-list";
import CardChildren from "./card-children";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import ignoreCircularReferences from "./help"


interface CardProps {
    data:ExperienceProps,
    mirror?:boolean
}

function CardExperience({data, mirror=false}: CardProps) {
  let [expanded, setExpanded] = useState(false);

  let template;
  
  if (expanded && !mirror) {
    template = <div className={`bg-white flex text-black `}>
    <div className={`flex`}>
      <div className={`flex flex-col ml-6`}>
        {/* <h1 className="font-roclette leading-[4rem] lowercase font-normal text-7xl mt-6 text-black">
          {data.title}
        </h1>*/}
        <h2 className="font-economicaBold text-lg leading-none tracking-[0.2em] mt-6 text-black">
          {data.subTitle}
        </h2> 
      </div>
      <div className="flex border-r-2 h-3/4 self-center ml-20 bg-black"></div>
      <div className="mt-28 ml-20 mb-28 mr-16 text-xl leading-7 font-economicaBold">
        <CardChildren data={data.children} />
      </div>
    </div>
  </div>;
  } else if(expanded && mirror) {
    template =  
    <div className={`flex flex-row-reverse`}>
      <div className="flex flex-col mr-6">
  
      <div className="flex border-r-2 h-3/4 self-center mr-20 bg-black"></div>
      <div className="mt-28 mr-20 mb-28 ml-16 text-xl leading-7 font-economicaBold">
        <CardChildren data={data.children} />
      </div>
    </div>
  </div>;
  } 

  let [ref, { height }] = useMeasure();


  return (
    <>
      <MotionConfig transition={{ type: "spring" }}>
        <motion.div className="bg-white  shadow-2xl mb-5">
          <motion.div
            layout
            transition={{ layout: { duration: 0.2 } }}
            className=" flex justify-center text-black min-h-[8em] p-4 mb-5 "
          >
            <motion.div layout className="flex w-[100%] justify-between">
              <motion.div layout className="flex flex-col">
                <motion.h1
                  layout="position"
                  className="font-roclette leading-[4rem] lowercase font-normal text-7xl text-black"
                >
                  {data.title}
                </motion.h1>
                <motion.h2
                  layout="position"
                  className="font-economicaBold text-lg leading-none tracking-[0.2em] mt-6 text-black"
                >
                  {data.subTitle}
                </motion.h2>
              </motion.div>
              {!expanded && (
                <motion.button
                  className="bg-black text-white font-roclette lowercase text-sm flex m-4 "
                  onClick={() => setExpanded(!expanded)}
                >
                  <span className="self-center p-2 justify-start uppercase font-economicaBold">
                    more details.
                  </span>
                </motion.button>
              )}
            </motion.div>

            {expanded && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  className="flex"
                >
                  <div className="text-xl leading-7 font-economicaBold">
                    <CardChildren data={data.children} />
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>

          {expanded && (
            <div className="flex justify-end">
              <motion.button
                className="bg-black text-white font-roclette lowercase text-sm flex m-4"
                onClick={() => setExpanded(!expanded)}
              >
                <span className="self-center p-2 justify-start uppercase font-economicaBold">
                  more details.
                </span>
              </motion.button>
            </div>
          )}
        </motion.div>
      </MotionConfig>
    </>
  );
}

export default CardExperience;

// interface ResizablePanelProps {
//   children: ReactElement;
// }
// function ResizablePanel({ children }: ResizablePanelProps) {
//   let [ref, { height }] = useMeasure();

//   return (
//     <motion.div
//       animate={{ height: height}} 
//     >
//       <motion.div
//         key={JSON.stringify(children, ignoreCircularReferences())}
//         initial={{ opacity: 0}}
//         animate={{ opacity: 1, transition :{ delay:0.2, duration: 0.4} }}
//       >
//         <div ref={ref} >
//           {children}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

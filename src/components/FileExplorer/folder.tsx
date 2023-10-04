import { useState } from "react";

import { ExploreFileProps } from "@/src/data";
import File from "./file";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { BsChevronDoubleRight, BsChevronDown, BsChevronRight } from "react-icons/bs";
interface FolderProps {
    name: string;
    children : ExploreFileProps[];
}


const Folder = ({ children, name }: FolderProps) => {

    const files = children;
    const [showChildren, setShowChildren] = useState(true);
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
          rotate: showChildren ? -90 : 90,
          transition: {
            type: "tween",
            duration: 0.15,
            ease: "circIn",
          },
        },
        initial: {
          rotate: showChildren ? -90 : 90,
        },
      };

      const arrowVariants = {
        animate: {
          zIndex: 1,
          rotate: 0,
          transition: {
            type: "tween",
            duration: 0.25,
            ease: "circOut",
          },
        },
        exit: {
          zIndex: 0,
          rotate: showChildren ? -90 : 90,
          transition: {
            type: "tween",
            duration: 0.15,
            ease: "circIn",
          },
        },
        initial: {
          rotate: showChildren ? -90 : 90,
        },
      };

    let fileListing = <span>Loading...</span>;
    if (files != null) {
        fileListing = <ul>
            {files.sort().map(file => {
                if (file.isFolder) {
                    return <Folder  name={file.title} children={file.children} />;
                } else {
                    return <File key={file.title} logo={file.logo} name={file.title} level={file.level}/>;
                }
            })}
        </ul>;

       
    }
    return (
      <li
        className=" text-2xl font-rocletteBold pl-2"
        key={name}   
      >
        <AnimatePresence initial={false} mode="wait">
          <div className="flex items-center hover:bg-[#D3D3D3]"  onClick={() => {
          setShowChildren(!showChildren);
        }}>
            <motion.div
              key={name}
              initial="initial"
              variants={arrowVariants}
              animate="animate"
              exit="exit"
            >
              {showChildren ? <BsChevronDown /> : <BsChevronRight />}
            </motion.div>

            <motion.strong key={name}>{name}</motion.strong>
          </div>
          {showChildren && fileListing}
        </AnimatePresence>
      </li>
    );
};

export default Folder;
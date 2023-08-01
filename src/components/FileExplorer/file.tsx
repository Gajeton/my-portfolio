import * as React from "react";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { motion } from "framer-motion";
import { link } from "fs";

interface FileProps {
    name: string;
    logo: string
}

const File = ({ name, logo }: FileProps) => {
    const [html, setHtml] = useState<string>("")
    useEffect(() => {
      setHtml(logo)
    }, [html])
  return (
    <>
    <motion.div  className="flex flex-col px-4 text-lg font-roclette py-2" initial={{opacity:0}} animate={{opacity:1, transition :{duration: 2}}}>
      <div className="flex items-center">
        <div>{parse(html)}</div>
        <li className="px-2">{name}</li>
      </div>
      <hr className="h-px my-4 w-full bg-black border-0"/>
      </motion.div>
    </>
  );
};

export default File;
import * as React from "react";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { motion } from "framer-motion";

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
    <motion.div  initial={{opacity:0}} animate={{opacity:1, transition :{duration: 0.5}}}>
      <div>{parse(html)}</div>
      <li className="pl-4">{name}</li>
      </motion.div>
    </>
  );
};

export default File;
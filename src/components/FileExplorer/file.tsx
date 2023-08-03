import * as React from "react";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { motion } from "framer-motion";
import { link } from "fs";
import { FaGithubSquare } from "react-icons/fa";
import { Level } from "@/src/data/level.enum";
import classNames from "classnames";

interface FileProps {
    name: string;
    level?: Level;
    link?:string;
    logo: string
}


const File = ({ name, logo, level }: FileProps) => {
    const [html, setHtml] = useState<string>("")
  
    useEffect(() => {
      setHtml(logo)
    }, [html])
  return (
    <>
      <motion.div
        key={name}
        className="flex flex-col px-3 text-lg font-roclette hover:bg-[#D3D3D3]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <div className="flex items-center border-l-[1px] border-black w-full">
          <div className="flex p-2  w-full">
            
            <li className="flex justify-between w-full items-center">
              
              <div className="px-2 flex items-center text-xl">
              {parse(html)}
                <span className="pl-2">{name}</span>
                </div>

              <div  className={classNames({
                  'bg-gray-800': level == Level.ADVANCED,
                  'bg-gray-600': level == Level.INTERMEDIATE,
                  'bg-gray-400': level == Level.BEGINNER,
                  'p-2 mr-2 text-white':true

                })}>{level}</div>
                        
            </li>
            <a className="flex items-center" type="text" href="https://www.google.com"><FaGithubSquare /></a>

          </div>
        </div>
      </motion.div>

   
  {/* <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody> */}
    </>
  );
};

export default File;
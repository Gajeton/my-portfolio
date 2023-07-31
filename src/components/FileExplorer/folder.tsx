import { useState } from "react";

import { ExploreFileProps } from "@/src/data";
import File from "./file";
import { motion } from "framer-motion";

interface FolderProps {
    name: string;
    children : ExploreFileProps[];
}


const Folder = ({ children, name }: FolderProps) => {

    const files = children;
    const [showChildren, setShowChildren] = useState(true);


    let fileListing = <span>Loading...</span>;
    if (files != null) {
        fileListing = <ul>
            {files.sort().map(file => {
                if (file.isFolder) {
                    return <Folder  name={file.title} children={file.children} />;
                } else {
                    return <File key={file.title} logo={file.logo} name={file.title} />;
                }
            })}
        </ul>;

        if (!files.length) {
            fileListing = <ul><li><em>Empty folder</em></li></ul>;
        }
    }
    return <motion.li initial={{opacity:0}} animate={{opacity:1, transition :{duration: 0.5}}}>
        <strong onClick={() => {
            setShowChildren(!showChildren);
        }}>{name}</strong>
        {showChildren && fileListing}
    </motion.li>;
};

export default Folder;
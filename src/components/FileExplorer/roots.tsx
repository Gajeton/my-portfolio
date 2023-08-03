import { ExploreFileProps, exploreFile } from "@/src/data";
import Folder from "./folder";

interface RootProps {
    files: ExploreFileProps[] 

}

const Roots = ({files}: RootProps) => {
    return <ul className="tree p-4 ">
        {files.map(root => {
            return <Folder name={root.title} children={root.children} />;
        })}
    </ul>;
};

export default Roots;
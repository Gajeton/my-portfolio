import * as React from "react";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

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
      <div>{parse(html)}</div>
      <li className="pl-4">{name}</li>
    </>
  );
};

export default File;
'use client'

import { exploreFile } from "@/src/data";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import AnimateCard from '../shared/animated-card';
import AnimatedTitle from "../shared/animated-title";




export default function Contact() {

  const files = exploreFile
  return (
    <section id="contact-section" className=" my-14">
      <AnimatedTitle title="contact."></AnimatedTitle>
      <AnimateCard style="bg-white">
        <div className="font-rocletteBold text-2xl  resp:p-2 md:p-6 w-full flex justify-center flex-wrap items-center">
          <h1 className="md:flex">
            you can contact me on{" "}
            <a
              className="bg-black text-white mx-2 flex items-center text-xl"
              type="email"
              href="mailto: antoine.familiar@gmail.com"
            >
              <AiFillMail />
              <span className="pl-1">antoine.familiar@gmail.com</span>
            </a>{" "}
            on{" "}
            <a
              className="bg-black text-white mx-2 flex items-center text-xl"
              href="https://linkedin.com/in/antoine-familiar"
              type="text"
            >
              <AiFillLinkedin />
              <span className="pl-1">in/antoine-familiar</span>
            </a>{" "}
            or on{" "}
            <a
              className="bg-black text-white mx-2 flex items-center text-xl"
              type="text"
              href="https://github.com/gajeton"
            >
              <FaGithubSquare />
              <span className="pl-1">github.com/gajeton</span>
            </a>
          </h1>
        </div>
      </AnimateCard>
    </section>
  );
}

'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {AiOutlineArrowUp} from 'react-icons/ai'

function BackToTop() {


  const [matchSize, setmatchSize]  = useState(true)
  const [backToTop, setBackToTop]  = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setBackToTop(true)
        } else {
            setBackToTop(false)
        }
    })
    setmatchSize(window.matchMedia('(min-width: 815px)').matches)
  }, [])

  function scrollUp() {
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
  }

  
  return (
    <>
      {backToTop && matchSize && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
          className="bg-black text-white  font-roclette lowercase text-sm flex justify-center mt-2 fixed right-12 bottom-12 h-10 w-10 resp:h-4 resp:w-4"
          onClick={() => scrollUp()}
        >
          <span >
            <AiOutlineArrowUp size={40} />
          </span>
        </motion.button>
      )}
    </>
  );
}
export default BackToTop
// src/Modal.js
import React, { ReactNode } from 'react';
import { m, motion } from 'framer-motion';
import { OtherProps, OthersProps } from '@/src/data';
import { text } from 'stream/consumers';

interface ModalProps {
    closeModal: () => void;
    data: OtherProps
    label:string,
    style:string
  }



  

const OtherModal = ({ data, closeModal, label, style}: ModalProps) => {

  function formatlink(title: { text: string, link?: string }[]): ReactNode {
    return title.map((res) => {
      if (res.link) {
        return (<li className="ml-4 text-2xl">
            {res.text}<a className='ml-2 text-base font-roclette' href={res.link}>{res.link}</a>
        </li>);
      } else {
        return <li className="ml-4">
            {res.text}
          </li>
      }
    });
  }


  return (
    <motion.div onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div  onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
        className={` bg-white p-6  shadow-md w-2/3 resp:w-[85%] resp:${style} resp:overflow-y-scroll resp:overflow-x-hidden`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
      >
        <h2 className="font-rocletteBold text-5xl mb-4 resp:text-2xl">{label}</h2>
        <ul className="list-disc text-2xl resp:text-lg font-roclette">{formatlink(data.title)}</ul>
        <div className="flex justify-end mt-2">
          <button
            className=" bg-black mt-2 text-white px-2 py-2"
            onClick={closeModal}
          >
            Close Modal
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OtherModal;
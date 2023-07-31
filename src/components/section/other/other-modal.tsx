// src/Modal.js
import React from 'react';
import { motion } from 'framer-motion';
import { OtherProps, OthersProps } from '@/src/data';

interface ModalProps {
    closeModal: () => void;
    data: OtherProps
    label:string
  }
const OtherModal = ({ data, closeModal, label}: ModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6  shadow-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
      >
        <h2 className="font-rocletteBold text-2xl mb-4">{label}</h2>
        <ul className="list-disc">
        {data.title.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
        <div className="flex justify-end mt-2">
        <button
          className=" bg-black mt-2 text-white px-4 py-2"
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
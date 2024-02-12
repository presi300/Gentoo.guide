"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function AnimaetedBackground({}) {
  // It's literally just colored balls moving... tf did you expect?
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, x: -200, y: -200 }}
        whileInView={{ x: 0, y: 0, opacity: 0.8 }}
        transition={{ duration: 5, delay: 2 }}
        className="w-[10vw] h-[10vw] bg-blue-500 rounded-full absolute z-0 top-[18vw] left-[18vw]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200, y: -200 }}
        whileInView={{ x: 0, y: 0, opacity: 0.6 }}
        transition={{ duration: 4, delay: 2 }}
        className="w-[20vw] h-[20vw] bg-blue-500 rounded-full relative top-24 z-0 left-12"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: 300, y: 300 }}
        whileInView={{
          opacity: 0.2,
          x: 0,
          y: 0,
          width: "30vw",
          height: "30vw",
        }}
        transition={{ duration: 8, delay: 2 }}
        className="w-[35vw] h-[35vw] bg-purple-500 rounded-full absolute top-36 right-36"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -300, y: -250 }}
        whileInView={{ opacity: 0.4, x: 0, y: 0 }}
        transition={{ duration: 6, delay: 2 }}
        className="w-[17vw] h-[17vw] bg-purple-500 rounded-full absolute bottom-28 left-[34rem]"
      ></motion.div>

      <div className="w-screen h-screen  bg-[#000001] absolute z-0 bg-opacity-70 backdrop-blur-3xl top-0 bottom-0"></div>

      {/* 
      <div className="w-[300px] h-[300px] bg-yellow-500 rounded-full"></div>
      
      <div className="w-[300px] h-[300px] bg-orange-500 rounded-full"></div> */}
    </div>
  );
}

"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "../Text/Text";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Children } from "react";
export default function Modal({
  children,
  btn = (
    <div>
      <Text>Lmao</Text>
    </div>
  ),
}) {
  let [state, stateHandler] = useState(false);
  return (
    <div>
      <button onClick={() => stateHandler(!state)}>{btn}</button>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: "100%" }}
            exit={{ scale: 0 }}
            className="fixed top-7 bottom-7 right-7 left-7 z-50 rounded-[15px] bg-opacity-80 backdrop-blur-xl bg-[#201e22]  shadow-black"
          >
            <button
              onClick={() => stateHandler(!state)}
              className="absolute right-4 top-4"
            >
              <div className="text-white bg-white bg-opacity-5 p-1 rounded-[15px] hover:bg-opacity-10 transition-all">
                <IoClose size={35} />
              </div>
            </button>
            <div className="mt-10">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

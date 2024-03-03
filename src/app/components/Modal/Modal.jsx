"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Text from "../Text/Text";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Children } from "react";

export default function Modal({
  children,
  btn = (
    <div>
      <Text>Lmao</Text>
    </div>
  ),
  top = 3,
  bottom = 3,
  right = 3,
  left = 3,
  unit = "rem",
}) {
  let [state, stateHandler] = useState(false);

  return (
    <div>
      <button onClick={() => stateHandler(!state)}>{btn}</button>
      <AnimatePresence>
        {state && (
          <div className="fixed left-0 top-0 right-0 bottom-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: "100%" }}
              exit={{ scale: 0 }}
              className=" rounded-[15px]  bg-opacity-80 backdrop-blur-xl bg-[#201e22] shadow-black"
            >
              <button
                onClick={() => stateHandler(!state)}
                className="absolute right-4 top-4  z-50"
              >
                <div className="text-white bg-white bg-opacity-5 p-1 rounded-[15px] hover:bg-opacity-10 transition-all">
                  <IoClose size={35} />
                </div>
              </button>
              <div>{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

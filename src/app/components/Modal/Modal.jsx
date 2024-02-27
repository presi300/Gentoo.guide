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
  const [matches, setMatches] = useState();

  useEffect(() => {
    async function match() {
      // prettier-ignore
      window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => setMatches(e.matches));
      // prettier-ignore
      window.matchMedia("(max-width: 768px)").addEventListener("load", (e) => setMatches(!e.matches));
    }
    match();
  }, []);

  return (
    <div>
      <button onClick={() => stateHandler(!state)}>{btn}</button>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: "100%" }}
            exit={{ scale: 0 }}
            className="fixed rounded-[15px] z-50  bg-opacity-80 backdrop-blur-xl bg-[#201e22] shadow-black"
            style={{
              top: matches ? `${top}${unit}` : "0",
              bottom: matches ? `${bottom}${unit}` : "0",
              left: matches ? `${left}${unit}` : "0",
              right: matches ? `${right}${unit}` : "0",
              borderRadius: matches ? "15px" : "0px",
            }}
          >
            <button
              onClick={() => stateHandler(!state)}
              className="absolute right-4 top-4 z-50"
            >
              <div className="text-white bg-white bg-opacity-5 p-1 rounded-[15px] hover:bg-opacity-10 transition-all">
                <IoClose size={35} />
              </div>
            </button>
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

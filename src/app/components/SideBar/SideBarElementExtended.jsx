"use client";
import React from "react";
import Text from "../Text/Text";
import SideBarElement from "./SideBarElement";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// Content needs to be an array of strings with all of the things that you want to appear as  sub-elements in the sidebar
let SideBarElementExtended = ({ text = "XD", content }) => {
  const [state, stateHandler] = useState(false);
  let ContentElement = () => {
    return (
      <div>
        {content.map((content) => {
          return (
            <Link key={content} href={`#${content}`}>
              <li
                key={content}
                className="px-6 py-2 my-1 mx-1 rounded-xl hover:bg-white hover:bg-opacity-5 transition-all"
              >
                <Text variant="xs">{content}</Text>
              </li>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full h-auto flex flex-col  rounded-[15px]">
      <div className="z-50 " onClick={() => stateHandler(!state)}>
        <SideBarElement className="z-10" text={text}></SideBarElement>
      </div>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 100, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
            className="bg-[#41366C44] bg-opacity-20 rounded-b-[15px] z-0"
          >
            {state && (
              <motion.ul
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 100, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className=" mt-7"
              >
                <ContentElement></ContentElement>
              </motion.ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBarElementExtended;

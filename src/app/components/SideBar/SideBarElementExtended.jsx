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
      <div className="mx-[0.40rem] ">
        {content.map((content) => {
          return (
            <Link key={content} href={`#${content}`} replace>
              <li
                key={content}
                className="px-4 py-2 my-1 mx-1 hover:pl-12 hover:scale-125 transition-all hover:bg-[#FFFFFF11]"
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
    <div
      className="w-full h-auto flex flex-col border-b-[1px]  border-[#201e22FF] "
      onMouseOverCapture={() => stateHandler(true)}
      onMouseLeave={() => stateHandler(false)}
    >
      <div className="z-50">
        <SideBarElement className="z-10" text={text}></SideBarElement>
      </div>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 100, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {state && (
              <motion.ul
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 100, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                className="mt-5 "
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

"use client";
import React, { Children } from "react";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });
import Text from "../Text/Text";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { UITextTl } from "../universalLoader";

function Chip({ children, active }) {
  return (
    <Text variant="sm">
      <button
        className=" border-white border-[1px] py-1 px-2 rounded-2xl border-opacity-35  transition-colors"
        style={{
          background: active ? "#FFFFFF00" : "#FFFFFFAA",
          color: active ? "white" : "black",
        }}
      >
        {children}
      </button>
    </Text>
  );
}

function SbChapterSelector({ children }) {
  return <div className="w-full flex flex-col h-full gap-4">{children}</div>;
}

function SbChapter({ children, href = "#" }) {
  const [xd, xdHandler] = useState(false);
  return (
    <Link
      href={href}
      className="w-full bg-[#FFFFFF11] h-[50px] rounded-[15px] hover:bg-[#FFFFFF15] flex items-center transition-colors overflow-hidden"
      onMouseEnter={() => xdHandler(true)}
      onMouseLeave={() => xdHandler(false)}
    >
      <div className="px-4 ">
        <Text>{children}</Text>
      </div>
      <AnimatePresence>
        {xd && (
          <motion.div
            className="absolute  right-0 rounded-r-[15px] bg-[#FFFFFF] bg-opacity-[3%] backdrop-blur-md h-[50px] pt-4 overflow-hidden z-10"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 72 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pr-7 pl-7">
              <Text>
                <FaArrowRight />
              </Text>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

let SideBar = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0, // Element starts hidden (optional)
      x: "-100%", // Element starts off-screen to the left (optional)
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }, // Adjust duration as desired
    },
    exit: {
      opacity: 0,
      x: "100%", // Element exits off-screen to the right (optional)
      transition: { duration: 0.2 }, // Adjust duration as desired
    },
  };
  const [sw, swHandler] = useState(true);
  const Txt = UITextTl().components.SbNav;
  return (
    <div className="w-[345px] fixed left-0 top-0 bottom-0 bg-[#18171b] backdrop-blur-xl bg-opacity-80 rounded-tr-[10px] rounded-br-[10px] shadow flex-col justify-start items-center gap-2.5 inline-flex z-50">
      <div className="w-full h-[60px] justify-center gap-5 pr-8 sm:pr-0 items-center inline-flex  bg-[#1e1c20]  shadow-xl rounded-[10px]">
        {/* An extremely high intelligence way of figuring out which chip to highlight */}
        <div onClick={() => swHandler(false)}>
          <Chip active={sw}>{Txt.T1}</Chip>
        </div>
        <div onClick={() => swHandler(true)}>
          <Chip active={!sw}>{Txt.T2}</Chip>
        </div>
      </div>

      <div className=" w-full absolute h-full top-20 z-10 overflow-hidden flex justify-center">
        <motion.div
          variants={variants}
          animate={sw ? "visible" : "exit"}
          className="flex flex-col w-[85%] h-full relative top-0  z-0"
        >
          {children}
        </motion.div>

        <motion.div
          variants={variants}
          animate={sw ? "initial" : "visible"}
          className="w-[85%] h-full absolute top-0 "
        >
          <SbChapterSelector>
            <Text variant="sm">
              {" "}
              <div className="text-center opacity-70">{Txt.L1}</div>
            </Text>

            <SbChapter key={1} href="/Chapters/StartPage">
              <b className="pr-3">1.</b>
              {Txt.C1}
            </SbChapter>
            <SbChapter key={2} href="/Chapters/DownloadAndSetupPage">
              <b className="pr-3">2.</b>
              {Txt.C2}{" "}
            </SbChapter>
            <SbChapter key={3} href="/Chapters/InstallationPage">
              <b className="pr-3">3.</b>
              {Txt.C3}
            </SbChapter>
            <Text variant="sm">
              <div className="text-center opacity-70">{Txt.L2}</div>
            </Text>
            <SbChapter key={11} href="/">
              <b className="pr-3"></b>
              {Txt.P1}
            </SbChapter>
            <SbChapter key={12} href="/Chapters/InfoPage">
              <b className="pr-3"></b>
              {Txt.P2}
            </SbChapter>
            <Text variant="sm">
              <div className="text-center opacity-70">{Txt.L3}</div>
            </Text>
            <SbChapter key={13} href="https://www.gentoo.org">
              <b className="pr-3"></b>
              {Txt.P3}
            </SbChapter>
          </SbChapterSelector>
        </motion.div>
      </div>
    </div>
  );
};

export default SideBar;

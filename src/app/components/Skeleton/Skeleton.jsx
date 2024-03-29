"use client";
import SideBar from "../SideBar/SideBar";
import { TopBar } from "../TopBar/TopBar";
import { Children } from "react";
import { useState } from "react";
import HamburgerBtn from "../TopBar/HamburgerBtn";
import { motion, AnimatePresence } from "framer-motion";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import { SkipToEnd } from "../SkipToEnd/SkipToEnd";
import ChapterSelector from "../ChapterSelector/ChapterSelector";
import Image from "next/image";
import WIPBanner from "../WIPBanner/WIP";
import Text from "../Text/Text";
import { MdArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
// This needs to be put at the BOTTOM of all pages, the name is kinda counter-intuitive, but it's basically the sidebar + topbar combined for less writing
// This handles all of the logic for things that are always or conditionally visible in the same place.
// Also 💀

function TbNav() {
  const [ex, exHandler] = useState(false);
  function TbNavElement({
    children,
    variant = "regular",
    href = "#",
    target = "_blank",
  }) {
    return (
      <div>
        {variant === "regular" && (
          <Link href={href} target={target}>
            <div className="w-[150px] hover:bg-[#23202e] sm:hover:bg-transparent text-center transition-all sm:hover:scale-110 sm:w-auto p-3 border-x-2 border-[#2A2738] border-opacity-30 sm:border-none sm:bg-opacity-0 bg-[#111114]">
              <Text>{children}</Text>{" "}
            </div>
          </Link>
        )}
        {variant === "top" && (
          <Link href={href} target={target}>
            <div className="w-[150px] hover:bg-[#23202e] sm:hover:bg-transparent text-center transition-all sm:hover:scale-110 sm:w-auto border-x-2 border-t-2 border-[#2A2738] border-opacity-30  sm:border-none rounded-t-[15px] sm:bg-transparent bg-[#111114] p-3">
              <Text>{children}</Text>
            </div>
          </Link>
        )}
        {variant === "bottom" && (
          <Link href={href} target={target}>
            <div className="w-[150px] hover:bg-[#23202e] sm:hover:bg-transparent transition-all sm:hover:scale-110 text-center sm:w-auto p-3 border-x-2  border-[#2A2738] border-opacity-30 border-b-2  sm:bg-opacity-0 sm:border-none rounded-b-[15px] bg-[#111114]">
              <Text>{children}</Text>
            </div>
          </Link>
        )}
      </div>
    );
  }
  return (
    <div
      onMouseLeave={() => exHandler(false)}
      className="absolute right-24 top-0 h-full  flex items-center sm:overflow-hidden z-50"
    >
      <AnimatePresence>
        {ex && (
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 30, opacity: 0 }}
            transition={{ ease: "linear", duration: 0.15 }}
            className=" sm:mt-0 mr-0 sm:mr-3 sm:flex-row flex-col h-full sm:justify-center  items-center flex mt-7"
          >
            <TbNavElement href="/Chapters/InfoPage" variant="top">
              Information
            </TbNavElement>

            <TbNavElement href="/Chapters/StartPage">Get Started</TbNavElement>

            <TbNavElement href="https://wiki.gentoo.org" variant="bottom">
              Gentoo Wiki
            </TbNavElement>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => exHandler(!ex)} className="text-white  p-3  ">
        <div
          style={{ rotate: ex ? "180deg" : "0deg" }}
          className=" transition-all hover:scale-110"
        >
          <MdArrowBackIosNew size={18} />
        </div>
      </button>
    </div>
  );
}

export default function Skeleton({
  children,
  topBarVariant = "noHamburger :(",
}) {
  const [state, stateHandler] = useState(false);

  return (
    <div>
      {topBarVariant === "hamburger" && <SkipToEnd></SkipToEnd>}
      {/* TobBar */}
      <TopBar variant={topBarVariant}>
        <WIPBanner></WIPBanner>

        {topBarVariant === "hamburger" && (
          <div>
            <div className="absolute right-5 ">
              <ChapterSelector>
                <div className="hover:scale-110 transition-transform">
                  <Image src={"/logo.png"} width={120} height={42}></Image>
                </div>
              </ChapterSelector>
            </div>
            <div onClick={() => stateHandler((state) => !state)}>
              <HamburgerBtn></HamburgerBtn>
            </div>
            <div className="absolute z-40 right-[170px] top-[25px] text-white">
              <LangSwitcher langs={["English", "Български"]}></LangSwitcher>
            </div>
          </div>
        )}

        {topBarVariant === "noHamburger :(" && (
          <div>
            <TbNav></TbNav>
            <div className="absolute left-7 top-[0.8rem] ">
              <ChapterSelector>
                <div className="hover:scale-110 transition-transform">
                  <Image src={"/logo.png"} width={120} height={42}></Image>
                </div>
              </ChapterSelector>
            </div>
            <div className="absolute z-40 right-16 top-[26px] text-white ">
              <LangSwitcher langs={["English", "Български"]}></LangSwitcher>
            </div>
          </div>
        )}
      </TopBar>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ ease: "linear", x: { duration: 0.2 } }}
            className="fixed top-0 left-0 bottom-0"
          >
            <button
              onClick={() => stateHandler((state) => !state)}
              className="text-white absolute top-[0.9rem] left-[290px] z-[60] block sm:hidden hover:bg-white hover:bg-opacity-5 rounded-full"
            >
              <svg
                width="35px"
                height="35px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L16.8995 7.10051"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7.00001L16.8995 16.8995"
                  stroke="#FFFFFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <SideBar>
              {state && (
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 100 }}
                  exit={{ x: -300 }}
                  transition={{
                    x: { duration: 0.23 },
                    opacity: { duration: 0.2 },
                    delay: 30,
                  }}
                  className="flex flex-col gap-8 w-full"
                >
                  {children}
                </motion.div>
              )}
            </SideBar>
            {/* A really dumb way to make clicking off the sidebar close it */}
            <div
              className="bg-zinc-950 bg-opacity-0 w-screen h-screen z-10"
              onClick={() => stateHandler((state) => !state)}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
// This needs to be put at the BOTTOM of all pages, the name is kinda counter-intuitive, but it's basically the sidebar + topbar combined for less writing
// This handles all of the logic for things that are always or conditionally visible in the same place.
// Also 💀

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
        {topBarVariant === "hamburger" && (
          <div>
            <div className="absolute right-5 ">
              <ChapterSelector>
                <Image src={"/logo.png"} width={120} height={42}></Image>
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
            <div className="absolute left-7 top-[0.8rem]">
              <ChapterSelector>
                <Image src={"/logo.png"} width={120} height={42}></Image>
              </ChapterSelector>
            </div>
            <div className="absolute z-40 right-16 top-[25px] text-white">
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

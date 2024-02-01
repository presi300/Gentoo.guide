"use client";
import SideBar from "../SideBar/SideBar";
import { TopBar } from "../TopBar/TopBar";
import { Children } from "react";
import { useState } from "react";
import HamburgerBtn from "../TopBar/HamburgerBtn";
import { motion, AnimatePresence } from "framer-motion";
// This needs to be put at the BOTTOM of all pages, the name is kinda counter-intuitive, but it's basically the sidebar + topbar combined for less writing
// The only reason for it to exist is so that I can move all this sidebar animation, logic crap to a separate component...
export default function Skeleton({
  children,
  topBarVariant = "noHamburger :(",
}) {
  const [state, stateHandler] = useState(false);

  return (
    <div>
      <TopBar variant={topBarVariant}>
        <div onClick={() => stateHandler((state) => !state)}>
          <HamburgerBtn></HamburgerBtn>
        </div>
      </TopBar>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ ease: "linear", x: { duration: 0.2 } }}
            className="fixed top-2 left-0 bottom-2"
          >
            <button
              onClick={() => stateHandler((state) => !state)}
              className="text-white absolute top-4 left-[290px] z-50 block sm:hidden hover:bg-white hover:bg-opacity-5 rounded-full"
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
                  className="flex flex-col gap-3"
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

"use client";
// God fcking damn it, why is next like this
import tl from "./translations.json";
import React, { useEffect } from "react";
import Text from "./components/Text/Text";
import { Button } from "./components/Button/Button";
import { TopBar } from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import SideBarElement from "./components/SideBar/SideBarElement";
import SideBarElementExtended from "./components/SideBar/SideBarElementExtended";
import ShellBox from "./components/ShellBox/ShellBox";
import ShellBoxOutput from "./components/ShellBox/ShellBoxOutput";
import Skeleton from "./components/Skeleton/Skeleton";
import LoadText from "./components/LangSwitcher/Loader.server";
import IMGBox from "./components/IMGBox/IMGBox";
import { RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Modal from "./components/Modal/Modal";
import AnimaetedBackground from "./components/Background/Background";
import { VscFoldDown } from "react-icons/vsc";

export default function Home() {
  let [lmao, lmaoHandler] = useState(tl.lang.loading);

  useEffect(() => {
    window.onload = lmaoHandler(LoadText(tl));
  });

  return (
    <div>
      <div className="overflow-x-hidden">
        <div className=" absolute top-0 right-0 left-0 bottom-0 z-0 overflow-hidden ">
          <AnimaetedBackground></AnimaetedBackground>
        </div>
        <div className=" mt-[18vh] tall:mt-[24vh] short:bg-white  w-full ">
          {/* Logo and punchline... god, I'm so creative */}
          <div className="w-full flex justify-center items-center gap-28 tall:gap-32 flex-col px-5  sm:px-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <Image
                src="/logo_large.png"
                width={1920}
                height={1080}
                className="invert w-[95vw] max-w-[900px]"
              ></Image>
            </motion.div>

            <motion.div
              className="w-full text-center flex justify-center z-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            >
              <Text variant="heading">
                {lmao.bigTitle}{" "}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 3, delay: 1.8 }}
                  className="font-extrabold"
                >
                  {lmao.subBigTitle}
                </motion.div>
              </Text>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, delay: 3 }}
              className="z-20"
            >
              <Link href="#1">
                <motion.div
                  initial={{ y: "-7vh" }}
                  animate={{ y: "7vh" }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="  p-3 rounded-[25px] text-center border-[#16161a]   hover:b transition-all"
                >
                  <Text variant="sm">
                    <VscFoldDown size={35} />
                  </Text>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* I know I can make these into react components, I just don't wanna bother */}
          {/* Flying text/image cards */}
          <div className="pt-[20vh] w-full sec2 pb-24 overflox-x-hidden ">
            <div id="1" className="relative w-[100] h-[50px] top-[-5vh]"></div>
            <div className="md:ml-12 text-center px-2 md:text-start md:px-0">
              <Text variant="heading">{lmao.secondTitle}</Text>
              <div className="flex flex-col gap-1 ">
                <Text variant="md">{lmao.secondSubTitle}</Text>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className=" mt-24 h-[35rem] lg:h-[28rem] 3xl:h-[32rem] rounded-[15px] border-white border-[1px] border-opacity-5 md:mx-12 grid md:grid-rows-none grid-rows-2 md:grid-cols-2 place-items-center bg-white bg-opacity-[2%]"
            >
              <div className="flex px-3 sm:px-0 items-center justify-start w-full h-full">
                <Image
                  src="/gaming.png" //BG3 peak
                  width={1920}
                  height={1080}
                  className="w-auto max-h-[28rem] 3xl:max-h-[32rem] rounded-[15px]"
                ></Image>
              </div>
              <div className="flex w-full flex-col text-center  pr-12 pl-12">
                <Text variant="md">{lmao.Card1.Title}</Text>
                <Text variant="sm">{lmao.Card1.SubTitle}</Text>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className=" mt-24 h-[35rem] lg:h-[28rem] 3xl:h-[32rem] rounded-[15px] border-white border-[1px] border-opacity-5 md:mx-12 grid md:grid-rows-none grid-rows-2 md:grid-cols-2 place-items-center bg-white bg-opacity-[2%]"
            >
              <div className="flex w-full flex-col pl-12 pr-12">
                <Text variant="md">{lmao.Card2.Title}</Text>
                <Text variant="sm">{lmao.Card2.SubTitle}</Text>
              </div>
              <div className="flex px-3 sm:px-0 items-center justify-end w-full h-full">
                <Image
                  src="/iBookGentoo.png" //Taken from https://www.youtube.com/@WindowsG, I don't have an iBook G4 (God, I want one)... or any old, low-end hardware, unfortunately
                  width={1920}
                  height={1080}
                  className="w-auto max-h-[28rem] 3xl:max-h-[32rem] rounded-[15px]"
                ></Image>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className=" mt-24 h-[35rem] lg:h-[28rem] 3xl:h-[32rem] rounded-[15px] border-white border-[1px] border-opacity-5 md:mx-12 grid md:grid-rows-none grid-rows-2 md:grid-cols-2 place-items-center bg-white bg-opacity-[2%]"
            >
              <div className="flex px-3 sm:px-0 items-center justify-start w-full h-full">
                <Image
                  src="/lmao-min.gif" //BG3 peak
                  width={1920}
                  height={1080}
                  className="w-auto max-h-[28rem] 3xl:max-h-[32rem] rounded-[15px]"
                ></Image>
              </div>
              <div className="flex w-full flex-col text-center pr-12 pl-12">
                <Text variant="md">{lmao.Card3.Title}</Text>
                <Text variant="sm">{lmao.Card3.SubTitle}</Text>
              </div>
            </motion.div>
            <div className="w-full flex justify-center mt-24">
              <Modal
                btn={<Text variant="heading">Ready to begin?</Text>}
              ></Modal>
            </div>
          </div>
        </div>

        <Skeleton topBarVariant="noHamburger :("></Skeleton>
      </div>
    </div>
  );
}

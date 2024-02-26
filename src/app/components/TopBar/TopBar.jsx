"use client";
import React from "react";
import Image from "next/image";
import HamburgerBtn from "./HamburgerBtn";
import Text from "../Text/Text";
import "../Text/Text.css";
import { useEffect, useState } from "react";
import ChapterSelector from "../ChapterSelector/ChapterSelector";

export const TopBar = ({ variant = "hamburger", children }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {variant === "hamburger" && (
        <div
          className="fixed left-2 right-2 bg-[#18171b] rounded-[10px] h-[72px] z-0 transition-all"
          style={{
            top: isAtTop ? "0rem" : "0.5rem",
            left: isAtTop ? "0rem" : "0.5rem",
            right: isAtTop ? "0rem" : "0.5rem",
            height: isAtTop ? "68px" : "72px",
            borderRadius: isAtTop ? "0px" : "10px",
          }}
        >
          <div className="flex w-full h-full mx-4 items-center">
            {children}
            <div className="justify-end flex w-full mr-9 ">
              <div className="pt-2">
                <ChapterSelector>
                  <Image src={"/logo.png"} width={120} height={42}></Image>
                </ChapterSelector>
              </div>
            </div>
          </div>
        </div>
      )}
      {variant === "noHamburger :(" && (
        <div
          className="fixed top-2 left-2 right-2  rounded-[10px] h-[72px] transition-all z-50"
          style={{ background: isAtTop ? "#00000000" : "#18171b" }}
        >
          <div className="flex w-full h-full mx-4 items-center">
            <div className="justify-end flex ml-3">
              <Image src={"/logo.png"} width={120} height={42}></Image>
            </div>

            <div className="flex h-full w-full itemse-center justify-end gap-8">
              {children}
              <button>
                <Text variant="md">Info</Text>
              </button>
              <button className="mr-12">
                <Text variant="md">Wiki</Text>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

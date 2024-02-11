import React from "react";
import Image from "next/image";
import HamburgerBtn from "./HamburgerBtn";
import Text from "../Text/Text";
import "../Text/Text.css";

export const TopBar = ({ variant = "hamburger", children }) => {
  return (
    <div>
      {variant === "hamburger" && (
        <div className="fixed top-2 left-2 right-2 bg-[#0A090E] rounded-[10px] h-[72px] z-0">
          <div className="flex w-full h-full mx-4 items-center">
            {children}
            <div className="justify-end flex w-full mr-9">
              <Image src={"/logo.png"} width={120} height={42}></Image>
            </div>
          </div>
        </div>
      )}
      {variant === "noHamburger :(" && (
        <div className="fixed top-2 left-2 right-2 bg-[#0A090E] rounded-[10px] h-[72px] ">
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

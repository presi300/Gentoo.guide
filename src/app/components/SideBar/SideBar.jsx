import React, { Children } from "react";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });

let SideBar = ({ children }) => {
  return (
    <div className="w-[345px] fixed left-0 top-0 bottom-0  bg-[#18171b] backdrop-blur-xl bg-opacity-80 rounded-tr-[10px] rounded-br-[10px] shadow flex-col justify-start items-center gap-2.5 inline-flex z-50">
      <div className="w-full h-[60px] justify-center items-center inline-flex  bg-[#1e1c20] pt-[13px] shadow-xl rounded-tr-[10px]">
        <div
          className={`w-full h-full text-center text-violet-100 text-[26px]  font-medium ${comfortaa.className}`}
        >
          Sections
        </div>
      </div>
      <div className="p-6 w-full h-full">
        <div className="flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;

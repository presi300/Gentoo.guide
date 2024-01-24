import React, { Children } from "react";

let SideBar = ({ children }) => {
  return (
    <div className="w-[345px] h-[1024px] px-5 pt-[13px] pb-5 bg-zinc-950 rounded-tr-[10px] rounded-br-[10px] shadow flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="w-[215px] h-[46px] justify-center items-center inline-flex">
        <div className="w-[215px] h-[46px] text-center text-violet-100 text-[26px] font-medium font-['Comfortaa']">
          Sections
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 bg-white bg-opacity-5 rounded-[20px] p-4">
        {children}
      </div>
    </div>
  );
};

export default SideBar;

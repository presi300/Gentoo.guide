import React from "react";
import { children } from "react";
import Text from "../Text/Text";
import "../ShellBox/ShellBox.css";

export default function TextFileBox({
  children,
  fileName = "/etc/portage/make.conf",
}) {
  return (
    <div className="bg-[#0A090E] w-full border-[#2A2738] border-[1px] rounded-[15px] bg-opacity-40 ">
      <div className="border-[#2A2738] border-b-[1px] px-4 p-1 bg-[#0A090E] rounded-t-[15px] bg-opacity-70">
        <span className="text-violet-100 text-lg font-normal xd-sm">
          {fileName}
        </span>
      </div>
      <div className=" p-2 px-3">
        <span className="text-violet-100 text-lg font-normal xd">
          {children}
        </span>
      </div>
    </div>
  );
}

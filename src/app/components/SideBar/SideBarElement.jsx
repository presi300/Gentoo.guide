import React from "react";
import Text from "../Text/Text";
import Link from "next/link";

let SideBarElement = ({ text }) => {
  return (
    <Link href={`#${text}`}>
      <div className="w-full h-[46px] px-2.5 bg-indigo-900 rounded-[15px]  hover:bg-indigo-800 transition-colors ">
        <div className="text-violet-100text-lg w-full flex items-center h-full">
          <Text>{text}</Text>
        </div>
      </div>
    </Link>
  );
};

export default SideBarElement;

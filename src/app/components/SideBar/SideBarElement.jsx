import React from "react";
import Text from "../Text/Text";
import Link from "next/link";

let SideBarElement = ({ text }) => {
  return (
    <Link href={`#${text}`}>
      <div className="w-full h-[46px] px-2.5 bg-indigo-900  rounded-[15px] justify-start items-center gap-2.5 inline-flex hover:bg-indigo-800  transition-colors">
        <div className="w-full h-[46px] pr-[196.73px] py-[13px] bg-indigo-900 bg-opacity-0 rounded-[15px] justify-start items-center flex">
          <div className="text-violet-100text-lg w-full">
            <Text>
              <span>{text}</span>
            </Text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SideBarElement;

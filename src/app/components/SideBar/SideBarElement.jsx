import React from "react";
import Text from "../Text/Text";
import Link from "next/link";

let SideBarElement = ({ text }) => {
  return (
    <Link href={`#${text}`}>
      <div className="w-full h-[46px] px-2.5  rounded-t-xl  hover:scale-110 transition-transform">
        <div className="text-violet-100   w-full flex items-center h-full justify-center">
          <Text>{text}</Text>
        </div>
      </div>
    </Link>
  );
};

export default SideBarElement;

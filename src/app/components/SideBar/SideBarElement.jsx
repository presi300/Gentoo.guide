import React from "react";
import Text from "../Text/Text";

let SideBarElement = ({ text }) => {
  return (
    <div className="w-full h-[46px] px-2.5 bg-indigo-900 bg-opacity-20 rounded-[15px] justify-start items-center gap-2.5 inline-flex">
      <div className="w-[249.73px] h-[46px] pr-[196.73px] py-[13px] bg-indigo-900 bg-opacity-0 rounded-[15px] justify-start items-center flex">
        <div className="text-violet-100 text-lg ">
          <Text>{text}</Text>
        </div>
      </div>
    </div>
  );
};

export default SideBarElement;

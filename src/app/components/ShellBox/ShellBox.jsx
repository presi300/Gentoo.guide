import React from "react";
import "./ShellBox.css";

let ShellBox = ({
  command = "sudo emerge -moo",
  dir = "/home/lmao",
  variant = "regular",
}) => {
  const copy = async () => {
    await navigator.clipboard.writeText(command);
  };

  return (
    <div>
      {variant === "regular" && (
        <div className="w-[1014px] h-[60px] px-5 bg-[#0A090E] bg-opacity-70 rounded-[15px] border border-[#2A2738] border-opacity-75 backdrop-blur-[10px] justify-start items-center gap-1 inline-flex">
          <div>
            <span className="text-violet-400 text-lg font-normal xd ">
              user
            </span>
            <span className="text-violet-100 text-lg font-normal xd"> </span>
          </div>
          <div className="text-blue-400 text-lg font-normal xd">{dir}</div>
          <div className="w-[11px] text-[#529659] text-lg font-normal xd">
            $
          </div>
          <div className="text-violet-100 text-lg font-normal xd">
            {command}
          </div>
          <button
            onClick={(command) => copy(command)}
            className="w-[70px] h-[25px] bg-white bg-opacity-5 rounded-tr-[15px] rounded-bl-[15px] border border-b-gray-800 border-l-gray-800 border-t-[0px] border-r-[0px] border-opacity-75 absolute top-0 right-0 justify-center items-center flex"
          >
            <div className="text-center text-violet-100 text-xs font-medium font-['Comfortaa']">
              Copy
            </div>
          </button>
        </div>
      )}
      {variant === "root" && (
        <div className="w-[1014px] h-[60px] px-5 bg-[#0A090E] bg-opacity-70 rounded-[15px] border border-[#2A2738] border-opacity-75 backdrop-blur-[10px] justify-start items-center gap-1 inline-flex">
          <div>
            <span className="text-[#E79696] text-lg font-normal xd ">user</span>
            <span className="text-violet-100 text-lg font-normal xd"> </span>
          </div>
          <div className="text-blue-400 text-lg font-normal xd">{dir}</div>
          <div className="w-[11px] text-[#E79696] text-lg font-normal xd">
            #
          </div>
          <div className="text-violet-100 text-lg font-normal xd">
            {command}
          </div>
          <button
            onClick={(command) => copy(command)}
            className="w-[70px] h-[25px] bg-white bg-opacity-5 rounded-tr-[15px] rounded-bl-[15px] border border-b-gray-800 border-l-gray-800 border-t-[0px] border-r-[0px] border-opacity-75 absolute top-0 right-0 justify-center items-center flex"
          >
            <div className="text-center text-violet-100 text-xs font-medium font-['Comfortaa']">
              Copy
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ShellBox;

import React from "react";
import ShellBox from "./ShellBox";
import "./ShellBox.css";
// A ShellBox with an added output field below it, it accepts HTML for formatting, USE <pre> if you wanna keep text formatting
let ShellBoxOutput = ({
  command = "sudo emerge -moo",
  dir = "/home/lmao",
  variant = "regular",
  output,
  outputVariant = "regular",
}) => {
  return (
    <div className="bg-[#0A090E] bg-opacity-60 border-[1px] border-[#2A2738] backdrop-blur-[8px] my-6 rounded-[15px]">
      <ShellBox variant={variant} dir={dir} command={command}></ShellBox>
      {outputVariant === "regular" && (
        <div className="ml-4">
          <samp className="flex gap-2 text-[12px] sm:text-lg">{output}</samp>
        </div>
      )}
      {outputVariant === "image" && (
        <div className="w-full flex h-full items-center justify-center sm:items-start sm:justify-start m-4">
          {output}
        </div>
      )}
    </div>
  );
};

export default ShellBoxOutput;

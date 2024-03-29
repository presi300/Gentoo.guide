import React, { Children } from "react";
import { Comfortaa } from "next/font/google";
const comfortaa = Comfortaa({ subsets: ["latin"] });

import "./Text.css";
// 6 standard text sizes... I use other text styles wherever necessary (e.g. ShellBoxes and other things I haven't added yet)
let Text = ({
  children,
  variant = "sm",
  color = "#EBE9FC",
  centered = false,
}) => {
  return (
    <div>
      {variant === "xs" && (
        <div
          className={`font-['Comfortaa'] text-[12px] text-[#EBE9FC] lmao ${comfortaa.className}`}
        >
          {children}
        </div>
      )}
      {variant === "sm" && (
        <div
          className={`font-['Comfortaa'] text-[18px] text-[#EBE9FC] lmao ${comfortaa.className}`}
        >
          {children}
        </div>
      )}
      {variant === "md" && (
        <div
          className={`font-['Comfortaa'] text-[22px] text-[#EBE9FC] lmao ${comfortaa.className}`}
        >
          {children}
        </div>
      )}
      {variant === "heading" && (
        <div
          className={`font-['Comfortaa'] text-[35px] sm:text-[50px] text-[#EBE9FC] lmao ${comfortaa.className}`}
        >
          {children}
        </div>
      )}
      {variant === "bigHeading" && (
        <div
          className={`font-['Comfortaa'] text-[45px] sm:text-[60px] text-[#EBE9FC] lmao ${comfortaa.className}`}
        >
          {children}
        </div>
      )}
      {variant === "lg" && (
        <div
          className={`font-['Comfortaa'] text-[32px] text-[#EBE9FC] lmao ${comfortaa.className}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Text;

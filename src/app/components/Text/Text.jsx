import React, { Children } from "react";
import "./Text.css";
// 4 standard text sizes... I use other text styles wherever necessary (e.g. ShellBoxes and other things I haven't added yet)
let Text = ({ children, variant = "sm", color = "#EBE9FC" }) => {
  return (
    <div>
      {variant === "xs" && (
        <div className={`font-['Comfortaa'] text-[12px] text-[#EBE9FC] lmao `}>
          {children}
        </div>
      )}
      {variant === "sm" && (
        <div className={`font-['Comfortaa'] text-[18px] text-[#EBE9FC] lmao `}>
          {children}
        </div>
      )}
      {variant === "md" && (
        <div className={`font-['Comfortaa'] text-[26px] text-[#EBE9FC] lmao `}>
          {children}
        </div>
      )}
      {variant === "heading" && (
        <div
          className={`font-['Comfortaa'] text-[45px] sm:text-[60px] text-[#EBE9FC] lmao `}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Text;

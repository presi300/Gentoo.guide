import React, { Children } from "react";
import "./Text.css";

let Text = ({ children, variant = "sm" }) => {
  return (
    <div>
      {variant === "xs" && (
        <p className="font-['Comfortaa'] text-[12px] lmao text-[#EBE9FC]">
          {children}
        </p>
      )}
      {variant === "sm" && (
        <p className="font-['Comfortaa'] text-[18px] lmao text-[#EBE9FC]">
          {children}
        </p>
      )}
      {variant === "md" && (
        <p className="font-['Comfortaa'] text-[26px] lmao text-[#EBE9FC]">
          {children}
        </p>
      )}
      {variant === "heading" && (
        <p className="font-['Comfortaa'] text-[60px] font-bold lmao text-[#EBE9FC]">
          {children}
        </p>
      )}
    </div>
  );
};

export default Text;

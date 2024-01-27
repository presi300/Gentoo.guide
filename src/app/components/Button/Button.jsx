import React, { Children } from "react";
import Text from "../Text/Text";
// CSS file for the specific shadow I want on the buttons... yes, the class is called "lmaoo"
import "./Button.css";
// Buttons... idk what you expected, really
export const Button = ({ children, variant = "btn1" }) => {
  return (
    <div>
      {variant === "btn1" && (
        <button className="w-[114px] h-[36px] rounded-[10px] border-[2px] border-[#544685] bg-[#41366C] lmaoo">
          <div>
            <Text variant="sm">{children}</Text>
          </div>
        </button>
      )}
      {variant === "btn2" && (
        <button className="w-[114px] h-[36px] rounded-[10px] border-[2px] border-[#9284C6] bg-[#AAA1CC] lmaoo">
          <div>
            <Text variant="sm">{children}</Text>
          </div>
        </button>
      )}
      {variant === "btn-nav" && <button>{children}</button>}
    </div>
  );
};

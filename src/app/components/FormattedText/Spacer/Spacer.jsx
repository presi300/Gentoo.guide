import React from "react";

export default function Spacer({ variant }) {
  return (
    <div>
      {variant === "sm" && (
        <div className="mb-7">
          <div className="w-full h-[1px] bg-opacity-10 rounded-full bg-white"></div>
        </div>
      )}
    </div>
  );
}

"use client";
import React from "react";
import "../Text/Text.css";
import { useEffect, useState } from "react";

export const TopBar = ({ variant = "hamburger", children }) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {variant === "hamburger" && (
        <div
          className="fixed left-2 right-2 bg-[#18171b] h-[72px] z-0 transition-all"
          style={{
            top: isAtTop ? "0rem" : "0.5rem",
            left: isAtTop ? "0rem" : "0.5rem",
            right: isAtTop ? "0rem" : "0.5rem",
            borderRadius: isAtTop ? "0px" : "10px",
          }}
        >
          <div className="flex w-full h-full mx-4 items-center">{children}</div>
        </div>
      )}
      {variant === "noHamburger :(" && (
        <div
          className="fixed top-2 left-2 right-2  rounded-[10px] h-[72px] transition-all z-50"
          style={{ background: isAtTop ? "#00000000" : "#18171b" }}
        >
          <div className="flex w-full h-full mx-4 items-center">
            <div className="flex h-full w-full items-center justify-end gap-8">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

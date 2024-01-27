import React from "react";
import Image from "next/image";

import Text from "../Text/Text";
import "../Text/Text.css";

export const TopBar = ({ variant = "hamburger" }) => {
  return (
    <div>
      {variant === "hamburger" && (
        <div className="absolute top-2 left-2 right-2 bg-[#0A090E] rounded-[10px] h-[72px] ">
          <div className="flex w-full h-full mx-4 items-center">
            <button className="bg-[#AAA1CC] w-[45px] h-[45px] rounded-[13px] flex items-center justify-center hover:bg-[#8880AA] transition-colors">
              <svg
                width="21"
                height="17"
                viewBox="0 0 21 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="xd"
              >
                <g filter="url(#filter0_d_58_25)">
                  <path
                    d="M1.75001 2.79159H18.25C18.4931 2.79159 18.7263 2.68184 18.8982 2.48649C19.0701 2.29114 19.1667 2.02619 19.1667 1.74992C19.1667 1.47365 19.0701 1.2087 18.8982 1.01335C18.7263 0.817999 18.4931 0.708252 18.25 0.708252H1.75001C1.5069 0.708252 1.27374 0.817999 1.10183 1.01335C0.929921 1.2087 0.833344 1.47365 0.833344 1.74992C0.833344 2.02619 0.929921 2.29114 1.10183 2.48649C1.27374 2.68184 1.5069 2.79159 1.75001 2.79159ZM18.25 6.95825H1.75001C1.5069 6.95825 1.27374 7.068 1.10183 7.26335C0.929921 7.4587 0.833344 7.72365 0.833344 7.99992C0.833344 8.27619 0.929921 8.54114 1.10183 8.73649C1.27374 8.93184 1.5069 9.04159 1.75001 9.04159H18.25C18.4931 9.04159 18.7263 8.93184 18.8982 8.73649C19.0701 8.54114 19.1667 8.27619 19.1667 7.99992C19.1667 7.72365 19.0701 7.4587 18.8982 7.26335C18.7263 7.068 18.4931 6.95825 18.25 6.95825ZM18.25 13.2083H1.75001C1.5069 13.2083 1.27374 13.318 1.10183 13.5133C0.929921 13.7087 0.833344 13.9737 0.833344 14.2499C0.833344 14.5262 0.929921 14.7911 1.10183 14.9865C1.27374 15.1818 1.5069 15.2916 1.75001 15.2916H18.25C18.4931 15.2916 18.7263 15.1818 18.8982 14.9865C19.0701 14.7911 19.1667 14.5262 19.1667 14.2499C19.1667 13.9737 19.0701 13.7087 18.8982 13.5133C18.7263 13.318 18.4931 13.2083 18.25 13.2083Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_58_25"
                    x="0.833344"
                    y="0.708252"
                    width="19.3333"
                    height="15.5833"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="1" dy="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_58_25"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_58_25"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <div className="justify-end flex w-full mr-9">
              <Image src={"/logo.png"} width={120} height={42}></Image>
            </div>
          </div>
        </div>
      )}

      {variant === "noHamburger :(" && (
        <div className="absolute top-[100px] left-2 right-2 bg-[#0A090E] rounded-[10px] h-[72px] ">
          <div className="flex w-full h-full mx-4 items-center">
            <div className="justify-end flex ml-3">
              <Image src={"/logo.png"} width={120} height={42}></Image>
            </div>
            <div className="flex h-full w-full itemse-center justify-end gap-8">
              <button>
                <Text variant="md">Info</Text>
              </button>
              <button className="mr-12">
                <Text variant="md">Wiki</Text>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

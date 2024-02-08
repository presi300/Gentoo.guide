import React, { useState } from "react";
import Image from "next/image";
import { IoIosResize } from "react-icons/io";

// This entire element has been shamelessly cloned from upscayl.org
const IMGBox = ({
  IMG1 = "/xd.jpg",
  IMG2 = "/lmao.jpg",
  IMGWidth = 800,
  IMGHeight = 600,
  IMGResX = 1920,
  IMGResY = 1080,
}) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial value (In %)
  const xd = IMG1;
  const lmao = IMG2;
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div style={{ width: `${IMGWidth}px`, height: `${IMGHeight}px` }}>
      <div className="rounded-xl relative top-0 left-0">
        <Image
          style={{
            objectFit: "cover",
            width: `${IMGWidth}px`,
            height: `${IMGHeight}px`,
          }}
          alt="Yeah, you're not supposed to see me"
          src={IMG1}
          width={IMGResX}
          height={IMGResY}
          className="relative left-0 top-0 rounded-xl"
        ></Image>
        <Image
          alt="Yeah, you're not supposed to see me"
          style={{
            objectFit: "cover",
            width: `${(IMGWidth * sliderValue) / 100}px`,
            height: `${IMGHeight}px`,
            objectPosition: "bottom left",
          }}
          src={IMG2}
          width={IMGResX}
          height={IMGResY}
          className="absolute top-0 left-0 w-full bottom-0 rounded-l-xl"
        ></Image>
        <input
          type="range"
          min="1"
          max="100"
          id="slider"
          value={sliderValue}
          onChange={handleSliderChange}
          className=" left-0 top-0 h-full z-50 inset-0 w-full cursor-pointer opacity-0 absolute  bg-red-300 color-white "
        ></input>
        <div
          className="absolute left-0  top-0 h-full "
          style={{ width: `${(IMGWidth * sliderValue) / 100}px` }}
        >
          <div className="bg-white absolute right-0 bottom-0 top-0 w-[5px] bg-opacity-55 ">
            <div className="absolute top-[46%] bg-white p-2 left-[-20px] rounded-full bg-opacity-35 backdrop-blur-md">
              <IoIosResize size={30} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMGBox;

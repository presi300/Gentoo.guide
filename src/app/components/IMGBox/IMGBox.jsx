import React from "react";
import Image from "next/image";

let IMGBox = ({ img }) => {
  return (
    <div className="w-full h-[300px]">
      <Image
        src={`/${img}`}
        style={{ width: "100%", height: "363px", objectFit: "contain" }}
        width={1000}
        height={363}
      ></Image>
    </div>
  );
};

export default IMGBox;

"use client";
// God fcking damn it, why is next like this
import tl from "./translations.json";
import React, { useEffect } from "react";
import Text from "./components/Text/Text";
import { Button } from "./components/Button/Button";
import { TopBar } from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import SideBarElement from "./components/SideBar/SideBarElement";
import SideBarElementExtended from "./components/SideBar/SideBarElementExtended";
import ShellBox from "./components/ShellBox/ShellBox";
import ShellBoxOutput from "./components/ShellBox/ShellBoxOutput";
import AttentionBox from "./components/AttentionBox/AttentionBox";
import Skeleton from "./components/Skeleton/Skeleton";
import LoadText from "./components/LangSwitcher/Loader.server";

export default function Home() {
  // Check Text/Loader.js for more info on this f  console.log(text);
  const text = LoadText(tl);

  return (
    <div>
      <div className="flex w-full items-center justify-center mt-32 px-3 lg:px-0">
        <div className="w-[1000px]">
          <Text variant="md">{text.sec1.title}</Text>
          <Text>{text.sec1.content}</Text>

          {/* <IMGBox img={"mefr.jpg"}></IMGBox> */}
        </div>{" "}
      </div>
      <Skeleton topBarVariant="hamburger">
        <SideBarElementExtended
          text="Test"
          content={["Testing", "Testing", "*Insert GlaDos joke here*"]}
        ></SideBarElementExtended>
        <SideBarElementExtended
          text="Test"
          content={["Testing", "Testing", "*Insert GlaDos joke here*"]}
        ></SideBarElementExtended>
      </Skeleton>
    </div>
  );
}

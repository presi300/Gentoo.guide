// God fcking damn it, why is next like this
"use client";
import Image from "next/image";
import React from "react";
import Text from "./components/Text/Text";
import { Button } from "./components/Button/Button";
import { TopBar } from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import { useState } from "react";
import SideBarElement from "./components/SideBar/SideBarElement";
import SideBarElementExtended from "./components/SideBar/SideBarElementExtended";
import ShellBox from "./components/ShellBox/ShellBox";
import ShellBoxOutput from "./components/ShellBox/ShellBoxOutput";
import AttentionBox from "./components/AttentionBox/AttentionBox";
import Skeleton from "./components/Skeleton/Skeleton";

export default function Home() {
  return (
    <div>
      <div className="flex w-full items-center justify-center mt-32">
        <div className="w-[1000px]">
          <Text variant="heading">Lorem Ipsum</Text>
          <Text variant="sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Text>
          <div className="my-4 mb-8">
            <ShellBox
              dir="/home/test"
              command="sudo rm -rf /* --no-preserve-root"
            ></ShellBox>
          </div>
          <Text variant="md">Lorem Ipsum</Text>
          <ShellBoxOutput variant="root" output={<p>Test</p>}></ShellBoxOutput>
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

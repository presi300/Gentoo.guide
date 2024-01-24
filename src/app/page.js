"use client";
import Image from "next/image";
import React, { useState } from "react";
import Text from "./components/Text/Text";
import { Button } from "./components/Button/Button";
import { TopBar } from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import SideBarElement from "./components/SideBar/SideBarElement";
import SideBarElementExtended from "./components/SideBar/SideBarElementExtended";
import ShellBox from "./components/ShellBox/ShellBox";

export default function Home() {
  return (
    <div className="flex gap-2 mt-24">
      <TopBar></TopBar>
      <SideBar>
        <SideBarElementExtended
          text="Test"
          content={["test", "test2"]}
        ></SideBarElementExtended>
      </SideBar>
      <Button>Lol</Button>
      <Button variant="btn2">Lol</Button>
      <div className="flex flex-col gap-3">
        <ShellBox command="lmao"></ShellBox>
        <ShellBox command="lmao333"></ShellBox>
        <ShellBox command="I like turtles"></ShellBox>
        <ShellBox variant="root"></ShellBox>
      </div>
    </div>
  );
}

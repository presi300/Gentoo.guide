// God fcking damn it, why is next like this
import Image from "next/image";
import React from "react";
import Text from "./components/Text/Text";
import { Button } from "./components/Button/Button";
import { TopBar } from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import SideBarElement from "./components/SideBar/SideBarElement";
import SideBarElementExtended from "./components/SideBar/SideBarElementExtended";
import ShellBox from "./components/ShellBox/ShellBox";
import ShellBoxOutput from "./components/ShellBox/ShellBoxOutput";
import AttentionBox from "./components/AttentionBox/AttentionBox";

export default function Home() {
  return (
    <div className="flex gap-2 mt-24 ">
      <div className="flex flex-col gap-3 ">
        <div>
          <TopBar></TopBar>
        </div>

        <div>
          <TopBar variant="noHamburger :("></TopBar>
        </div>
      </div>

      <div className="mt-24">
        <SideBar>
          <SideBarElementExtended
            text="Test"
            content={["test", "test2"]}
          ></SideBarElementExtended>
        </SideBar>
      </div>
      <div className="mt-24 mx-12 gap-3 flex flex-col">
        <Button>Lol</Button>
        <Button variant="btn2">Lol</Button>
      </div>

      <div className="flex flex-col gap-3 mt-24">
        <ShellBox command="lmao"></ShellBox>
        <ShellBox command="lmao333"></ShellBox>
        <ShellBox command="I like turtles"></ShellBox>
        <ShellBox variant="root"></ShellBox>
        <ShellBoxOutput
          output={
            <div>
              {/* prettier-ignore */}
              <pre>
              ‎ Larry loves Gentoo (Linux)<br></br>
              ‎ _______________________ <br />
              ‎ Have you mooed today? <br />
              ‎ ----------------------- <br />
              ‎         \ <br />
              ‎          \ <br />
              ‎           ^__^ <br />
              ‎           (oo)\_______ <br />
              ‎           (__)\       )\/\ <br />
              ‎              ||----w | <br />
              ‎              ||     ||
              </pre>
            </div>
          }
        ></ShellBoxOutput>
        <AttentionBox variant="attention"></AttentionBox>
        <AttentionBox variant="warning"></AttentionBox>
        <AttentionBox variant="note"></AttentionBox>
      </div>
    </div>
  );
}

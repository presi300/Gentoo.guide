import React from "react";
import Text from "../components/Text/Text";
import Skeleton from "../components/Skeleton/Skeleton";
import SideBarElementExtended from "../components/SideBar/SideBarElementExtended";
import Link from "next/link";
import ShellBox from "../components/ShellBox/ShellBox";
import ShellBoxOutput from "../components/ShellBox/ShellBoxOutput";
import SkipToEnd from "../components/SkipToEnd/SkipToEnd";
import Spacer from "../components/Spacer/Spacer";
import AttentionBox from "../components/AttentionBox/AttentionBox";
import Image from "next/image";

export default function StarPage() {
  return (
    // FFS, vercel
    <div>
      <div className="flex w-full justify-center">
        <div className="w-[1200px] mt-24 px-4">
          <div className="flex flex-col ">
            <Text variant="bigHeading">
              <p className="text-center md:text-start">
                Welcome to gentoo.guide!
              </p>{" "}
            </Text>
            <Spacer variant="sm"></Spacer>
            <Text variant="md">
              This is a short page to get you up-to speed on how this site works
              and how gentoo itself works.
            </Text>
            <div id="Site Navigation"></div>
            <div className="mt-24 ml-3">
              <Text variant="lg">Site Navigation</Text>
              <Spacer variant="sm"></Spacer>
              <Text variant="md">
                Gentoo.guide is quite different from other wikis... As it's not
                really a wiki in the regular sense.
              </Text>
              <div className="my-6">
                <Text variant="md">
                  Most of the site navigation is done through the sidebar. It's
                  simple, click on the thing you want to see... <br /> Clicking
                  on a sidebar element expands it, showing smaller sub-elements.
                  Clicking on a big element brings you to a major (big) heading
                  and clicking on a sub-element brings you to a sub (small)
                  heading.
                </Text>
              </div>

              <div className="bg-red-300 bg-opacity-20">
                <Text>TODO: Add an image showcasing that</Text>
              </div>

              <div className="my-6">
                <Text variant="md">
                  You can also change the language to your preferred one from
                  the globe icon in the top bar, if it's supported of course
                </Text>
                <div className="my-6">
                  <div className="grid w-full place-items-center">
                    <Image
                      className="rounded-[15px] border-[1px] border-[#AAA1CC] my-3 mb-12"
                      alt="You really should not be seeing this..."
                      src={"/LanguageSw.png"}
                      width={200}
                      height={100}
                    ></Image>
                  </div>

                  <AttentionBox
                    variant="note"
                    text=" Note: The language switcher does not have an indicatorfor the
                  currently selected language"
                  ></AttentionBox>
                </div>
                <div className="mt-12">
                  <Text variant="md">
                    If you do not care about the information on a certain page,
                    you can click the "Skip the entire chapter" button to go all
                    the way down to the bottom of the page
                  </Text>
                  <div className="grid place-items-center my-12  ">
                    <Image
                      src="/SkipBtn.png"
                      alt="You really should not be seeing this..."
                      width={100}
                      height={100}
                      className="border-[#AAA1CC] border-[1px] rounded-[15px]"
                    ></Image>
                  </div>
                  <div className="bg-red-300 bg-opacity-20">
                    <Text>TODO: Add a chapter selector</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="end"></div>
        </div>
      </div>

      <Skeleton topBarVariant="hamburger">
        <SideBarElementExtended
          text="Welcome!"
          content={["Site Navigation"]}
        ></SideBarElementExtended>
      </Skeleton>
      <SkipToEnd></SkipToEnd>
    </div>
  );
}

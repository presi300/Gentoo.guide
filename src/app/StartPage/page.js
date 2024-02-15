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
import { Button } from "../components/Button/Button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

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
              This is a short page to get you up-to speed on how this site
              works.
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
                    text=" Note: The language switcher does not have an indicator for the
                  currently selected language"
                  ></AttentionBox>
                </div>
                <div className="mt-12">
                  <Text variant="md">
                    If you do not care about any of the information on a certain
                    page, you can click the "Skip the entire page" button to go
                    all the way down to the bottom of the page
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
                  <div className="mt-24">
                    <div id="What is Gentoo.guide?"></div>
                    <Text variant="lg">
                      What is gentoo.guide, exactly and why does it exist?
                    </Text>
                    <Spacer variant="sm"></Spacer>
                    <Text variant="md">
                      Gentoo.guide is an attempt to condense the (in my opinion)
                      most useful information from the gentoo AMD64 handbook and
                      the gentoo wiki into one well-ish* written guide. <br />{" "}
                      <br />
                      It is also a learning excersise for me, trying to learn
                      React with NextJS. <br /> <br />
                      It is also, also the project I'm doing as my final, trying
                      to graduate 12th grade.
                    </Text>
                  </div>
                  <div className="mt-24">
                    <div id="I wanna help, how?"></div>
                    <Text variant="lg">
                      I found something wrong/wanna help translate the site,
                      how?
                    </Text>
                    <Spacer variant="sm"></Spacer>
                    <Text variant="md">
                      For the former, submit either an issue on my
                      codeberg/github (preferably codeberg), or if you've
                      already figured out a fix for it, submit a pull request.{" "}
                      <br /> <br />
                      As for translations, check out the README for more
                      information on that.
                    </Text>
                  </div>
                  <div className="mt-20">
                    <div className="mb-12">
                      <Spacer variant="sm"></Spacer>
                    </div>
                    <div className="text-center">
                      <Text variant="lg">
                        Alright, with all that out of the way
                      </Text>
                      <Text variant="md">Let's start with</Text>
                      <div className="grid place-items-center">
                        <div className="my-5 p-3 bg-[#41366C] transition-all rounded-full bg-opacity-35 hover:bg-opacity-50 max-w-[700px]">
                          <Link
                            href="InstallEnvSetup"
                            className="flex items-center gap-5"
                          >
                            <Text>
                              Downloading and setting up the installation
                              environment
                            </Text>
                            <Text>
                              {" "}
                              <FaArrowRight />
                            </Text>
                          </Link>
                        </div>
                      </div>
                    </div>
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
          content={[
            "Site Navigation",
            "What is Gentoo.guide?",
            "I wanna help, how?",
          ]}
        ></SideBarElementExtended>
      </Skeleton>
      <SkipToEnd></SkipToEnd>
    </div>
  );
}

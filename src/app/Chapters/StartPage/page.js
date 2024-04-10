"use client";
import LoadText from "../../components/LangSwitcher/Loader.server";
import { useState, useEffect } from "react";
import React from "react";
import Text from "../../components/Text/Text";
import Skeleton from "../../components/Skeleton/Skeleton";
import SideBarElementExtended from "../../components/SideBar/SideBarElementExtended";
import Link from "next/link";
import ShellBox from "../../components/ShellBox/ShellBox";
import ShellBoxOutput from "../../components/ShellBox/ShellBoxOutput";
import Spacer from "../../components/FormattedText/Spacer/Spacer";
import AttentionBox from "../../components/AttentionBox/AttentionBox";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import TextFileBox from "../../components/TextFileBox/TextFileBox";
import tl from "./translations.json";

export default function StarPage() {
  let [lmao, lmaoHandler] = useState(tl.lang.loading);

  useEffect(() => {
    window.onload = LoadText(tl).then((Content) => lmaoHandler(Content));
  });
  return (
    // FFS, vercel

    <div>
      {/* Welcome */}s{" "}
      <Text variant="bigHeading">
        <p className="text-center md:text-start">{lmao.Welcome.mainTitle}</p>{" "}
      </Text>
      <Spacer variant="sm"></Spacer>
      <Text variant="md">{lmao.Welcome.mainSubTitle}</Text>
      <div id={lmao.SideBar.Content.El1.e1}></div>
      <div className="mt-24 ml-3">
        {/* Navigation */}
        <Text variant="lg">{lmao.Welcome.Navigation.mainTitle}</Text>
        <Spacer variant="sm"></Spacer>
        <Text variant="md">{lmao.Welcome.Navigation.mainSubTitle}</Text>
        <div className="my-6">
          <Text variant="md">
            <div
              dangerouslySetInnerHTML={{
                __html: lmao.Welcome.Navigation.sec1.HTMLcontent,
              }}
            ></div>
          </Text>
        </div>

        <div className="flex w-full justify-center ">
          <video
            src="/triangus4.mp4"
            className="w-full max-w-[800px] border-[1px] rounded-[15px] border-[#AAA1CC]"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        <div className="my-6">
          <Text variant="md">{lmao.Welcome.Navigation.sec2}</Text>
          <div className="my-6">
            <div className="grid w-full place-items-center"></div>

            <AttentionBox
              variant="note"
              text={lmao.Welcome.Navigation.AttentionBox1}
            ></AttentionBox>
          </div>
          <div className="mt-12">
            <Text variant="md">{lmao.Welcome.Navigation.sec3}</Text>
            <div className="grid place-items-center my-12  ">
              <Image
                src="/SkipBtn.png"
                alt="An image of the skip button"
                width={100}
                height={100}
                className="border-[#AAA1CC] border-[1px] rounded-[15px]"
              ></Image>
            </div>
            <div className="mt-24">
              {/* What is Gentoo.guide */}
              <div id={lmao.SideBar.Content.El1.e2}></div>
              <Text variant="lg">
                {lmao.Welcome.Navigation.secondaryTitle1}
              </Text>
              <Spacer variant="sm"></Spacer>
              <Text variant="md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: lmao.Welcome.Navigation.sec4.HTMLcontent,
                  }}
                ></div>
              </Text>
            </div>
            <div className="mt-24">
              <div id={lmao.SideBar.Content.El1.e3}></div>
              <Text variant="lg">
                {lmao.Welcome.Navigation.secondaryTitle2}
              </Text>
              <Spacer variant="sm"></Spacer>
              <Text variant="md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: lmao.Welcome.Navigation.sec5.HTMLcontent,
                  }}
                ></div>
              </Text>
            </div>
          </div>
        </div>
      </div>
      {/* Why gentoo linux */}
      <div id={lmao.SideBar.Text.e2}></div>
      <div className="mt-28 mb-20">
        <Text variant="bigHeading">
          <p className="text-center md:text-start">
            {lmao.HowGentooWork.mainTitle}
          </p>{" "}
        </Text>
        <Spacer variant="sm"></Spacer>
        <Text variant="md">{lmao.HowGentooWork.mainSubTitle}</Text>
      </div>
      {/* Source based... */}
      <div className="ml-3">
        <div id={lmao.SideBar.Content.El2.e1}></div>
        <Text variant="lg">{lmao.HowGentooWork.secondaryTitle1}</Text>
        <Spacer variant="sm"></Spacer>
        <Text variant="md">
          <div
            dangerouslySetInnerHTML={{
              __html: lmao.HowGentooWork.sec1.HTMLcontent,
            }}
          ></div>
        </Text>
        {/* Portage and emerge */}
        <div className="mt-28" id={lmao.SideBar.Content.El2.e2}></div>
        <Text variant="lg">{lmao.HowGentooWork.secondaryTitle2}</Text>
        <Spacer variant="sm"></Spacer>
        <Text variant="md">
          <div
            dangerouslySetInnerHTML={{
              __html: lmao.HowGentooWork.sec2.HTMLcontent,
            }}
          ></div>
        </Text>
        <div className="mt-2 mb-9">
          <ShellBox
            dir="~"
            variant="root"
            command="emerge <package>"
          ></ShellBox>
        </div>
        <Text variant="md">{lmao.HowGentooWork.Label1}</Text>
        <div className="mt-3 mb-9">
          <ShellBox
            dir="~"
            variant="root"
            command="emerge --unmerge <package>"
          ></ShellBox>
        </div>
        <Text variant="md">{lmao.HowGentooWork.Label2}</Text>
        <div className="mt-3 mb-9">
          <ShellBox dir="~" variant="root" command="emerge --sync"></ShellBox>
        </div>
        <Text variant="md">{lmao.HowGentooWork.Label3}</Text>
        <div className="mt-3 mb-9">
          <ShellBox
            dir="~"
            variant="root"
            command="emerge -NuD @world"
          ></ShellBox>
        </div>
        <Text variant="md">{lmao.HowGentooWork.Label4}</Text>
        <div className="mt-3 mb-9">
          <ShellBox
            dir="~"
            variant="root"
            command="emerge --ask --depclean"
          ></ShellBox>
        </div>
        <div>
          <Text variant="md">
            <div
              dangerouslySetInnerHTML={{
                __html: lmao.HowGentooWork.sec3.HTMLcontent,
              }}
            ></div>
          </Text>
        </div>
        <div className="mt-3 mb-9">
          <ShellBox
            dir="~"
            variant="root"
            command="emerge --autounmask=y --autounmask-write <package>"
          ></ShellBox>
        </div>
        <Text variant="md">
          <div
            dangerouslySetInnerHTML={{
              __html: lmao.HowGentooWork.Label5.HTMLcontent,
            }}
          ></div>
        </Text>

        <div className="my-3">
          {/* prettier-ignore*/}
          <ShellBoxOutput
              variant="root"
              dir="~"
              command="dispatch-conf"
              output={
                <div className="my-3">

                  -- (1 of 1) -- /etc/portage/package.accept_keywords/lmao <br />
                  -- q quit, h help, n next, e edit-new, z zap-new, u use-new <br />
                  <idk className="mx-3"></idk> m merge, t toggle-merge, l look-merge: <b>u</b>
                </div>
              }
              ></ShellBoxOutput>
          <div className="ml-8 mt-2">
            <Text variant="sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: lmao.HowGentooWork.Label6.HTMLcontent,
                }}
              ></div>
            </Text>
          </div>
        </div>
        <div className="my-9">
          <AttentionBox
            variant="attention"
            text={lmao.HowGentooWork.AttentionBox2}
          ></AttentionBox>
        </div>
      </div>
      <div id={lmao.SideBar.Content.El2.e3}></div>
      <div className="mt-28"></div>
      <Text variant="lg">{lmao.HowGentooWork.secondaryTitle3}</Text>
      <Spacer variant="sm"></Spacer>
      <div>
        <Text variant="md">
          <div
            dangerouslySetInnerHTML={{
              __html: lmao.HowGentooWork.sec4.HTMLcontent,
            }}
          ></div>

          <Text variant="sm">
            <b>ACCEPT_LICENSE</b> <br />
            {lmao.HowGentooWork.TFBox1.Label}
          </Text>
        </Text>
        <div className="my-5">
          <TextFileBox>
            <div className="flex flex-col gap-2">
              <div className="text-zinc-700 ">
                {lmao.HowGentooWork.TFBox1.Comment}
              </div>
              <div>ACCEPT_LICENSE="*"</div>
            </div>
          </TextFileBox>
        </div>
        <div className="my-12">
          <div className="my-5">
            <Text variant="md">
              <b>MAKEOPTS</b> <br />
              <Text variant="sm">{lmao.HowGentooWork.TFBox2.Label}</Text>
            </Text>
          </div>
          <div>
            <TextFileBox>
              <div className="flex flex-col gap-2">
                <div className="text-zinc-700">
                  {lmao.HowGentooWork.TFBox2.Comment}
                </div>
                <div>MAKEOPTS="-j8 -l8"</div>
              </div>
            </TextFileBox>
            <div className="my-3">
              <AttentionBox
                variant="note"
                text={lmao.HowGentooWork.AttentionBox3}
              ></AttentionBox>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <Text variant="md">
            <b>USE</b>
            <Text variant="sm">{lmao.HowGentooWork.TFBox3.Label}</Text>
          </Text>
          <div className="my-3">
            <TextFileBox>
              <div className="flex flex-col gap-2">
                <div className="text-zinc-700">
                  {lmao.HowGentooWork.TFBox3.Comment}
                </div>
                <div>USE="wayland vulkan pipewire"</div>
              </div>
            </TextFileBox>
          </div>
        </div>
      </div>
      <div className="text-center">
        {/* Next page */}
        <Text variant="lg">{lmao.HowGentooWork.EndTitle}</Text>
        <Text variant="md">{lmao.HowGentooWork.EndSubTitle}</Text>
        <div className="grid place-items-center">
          <div className="my-5 p-3 bg-[#41366C] transition-all rounded-full bg-opacity-35 hover:bg-opacity-50 max-w-[700px]">
            <Link
              href="/Chapters/DownloadAndSetupPage"
              className="flex items-center gap-5"
              prefetch={true}
            >
              <Text>{lmao.HowGentooWork.EndButtonTxt}</Text>
              <Text>
                {" "}
                <FaArrowRight />
              </Text>
            </Link>
          </div>
        </div>
      </div>
      <Skeleton topBarVariant="hamburger">
        <SideBarElementExtended
          text={lmao.SideBar.Text.e1}
          content={[
            `${lmao.SideBar.Content.El1.e1}`,
            `${lmao.SideBar.Content.El1.e2}`,
            `${lmao.SideBar.Content.El1.e3}`,
          ]}
        ></SideBarElementExtended>
        <SideBarElementExtended
          text={lmao.SideBar.Text.e2}
          content={[
            `${lmao.SideBar.Content.El2.e1}`,
            `${lmao.SideBar.Content.El2.e2}`,
            `${lmao.SideBar.Content.El2.e3}`,
          ]}
        ></SideBarElementExtended>
      </Skeleton>
    </div>
  );
}

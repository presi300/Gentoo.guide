"use client";
import React from "react";
import Modal from "../Modal/Modal";
import { Children } from "react";
import Text from "../Text/Text";
import Image from "next/image";
import Link from "next/link";
import { UITextTl } from "../universalLoader";

// Fck me, that's a lot of variables
function Chapter({
  name,
  actualName,
  title,
  subtitle,
  img = "/logo.png",
  padded = true,
  bgc = "#000000",
  link = "#",
  target = "_blank", //Set this to anything but _blank if you don't want your link to open on another tab
  ImgRound = false,
}) {
  return (
    <Link href={link} target={target}>
      <div className="p-3 py-3 mx-8 sm:mx-12 my-8 bg-[#201e2277] shadow-md rounded-[15px] hover:scale-105 hover:bg-[#201e22] transition-all z-0">
        <div className="grid h-full sm:grid-cols-2 ">
          <div className="flex flex-col text-center sm:text-start justify-center">
            <div className="sm:ml-4 ">
              <Text variant="md">{title}</Text>
              <Text variant="xs">{subtitle}</Text>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <div
              className="bg-black mr-3 rounded-[15px] hidden sm:block"
              style={{
                padding: padded ? "1rem" : "0.4rem",
                background: `${bgc}`,
              }}
            >
              <Image
                src={img}
                width={700}
                height={500}
                loading="eager"
                style={{
                  width: padded ? "200px" : "220px",
                  borderRadius: ImgRound ? "10px" : "0px",
                }}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ChapterSelector({ children }) {
  const Txt = UITextTl().components.ChapterSelector;
  return (
    <Modal btn={children}>
      <div className="sm:h-[80vh] max-h-[1500px] max-w-[2300px] w-screen h-[80vh] sm:w-[80vw] overflow-scroll noscroll">
        <div className="flex absolute top-0 right-0 left-0 items-center justify-center p-[0.8rem] bg-[#2a272c] rounded-t-[15px] shadow-sm z-40">
          <Text variant="lg">{Txt.Title}</Text>
        </div>
        <div className="mt-24">
          <Text variant="lg">
            <div className="opacity-70 text-center pt-2">{Txt.L1}</div>
          </Text>
          <Chapter
            title={Txt.C1.T}
            subtitle={Txt.C1.ST}
            img="/logo.png"
            padded={true}
            ImgRound={true}
            link="/Chapters/DownloadAndSetupPage"
            target=""
          ></Chapter>
          <Chapter
            title={Txt.C2.T}
            subtitle={Txt.C2.ST}
            img="/logo.png"
            padded={true}
            ImgRound={true}
            link="/Chapters/DownloadAndSetupPage"
            target=""
          ></Chapter>
          <Chapter
            title={Txt.C3.T}
            subtitle={Txt.C3.ST}
            img="/logo.png"
            padded={true}
            ImgRound={true}
            link="/Chapters/DownloadAndSetupPage"
            target=""
          ></Chapter>

          <Text variant="lg">
            <div className="opacity-70 text-center pt-2">{Txt.L2}</div>
          </Text>
          <Chapter
            title={Txt.P1.T}
            subtitle={Txt.P1.ST}
            link="/Chapters/InfoPage"
          ></Chapter>
          <Chapter
            title={Txt.P2.T}
            subtitle={Txt.P2.ST}
            img="/GentooGuide.png"
            padded={false}
            ImgRound={true}
            link="/"
            target=""
          ></Chapter>
          <Text variant="lg">
            <div className="opacity-70 text-center pt-2">{Txt.L3}</div>
          </Text>

          <Chapter
            title={Txt.P3.T}
            subtitle={Txt.P3.ST}
            img="/GentooWiki.png"
            padded={false}
            bgc="#DDDAEC"
            link="https://wiki.gentoo.org"
          ></Chapter>
        </div>
      </div>
    </Modal>
  );
}

"use client";
import ch from "./Chapters.json";
import React from "react";
import Modal from "../Modal/Modal";
import { Children } from "react";
import Text from "../Text/Text";
import Spacer from "../FormattedText/Spacer/Spacer";
import Image from "next/image";
import Link from "next/link";

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
              <Text variant="lg">{title}</Text>
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
  return (
    <Modal btn={children}>
      <div className="sm:h-[80vh] max-h-[1500px] max-w-[2300px] w-screen h-[80vh] sm:w-[80vw] overflow-scroll noscroll">
        <div className="flex absolute top-0 right-0 left-0 items-center justify-center p-[0.8rem] bg-[#2a272c] rounded-t-[15px] shadow-sm z-40">
          <Text variant="lg">Select chapter</Text>
        </div>
        <div className="mt-24">
          <Text variant="lg">
            <div className="opacity-70 text-center pt-2">Guide chapters</div>
          </Text>
          <Chapter
            title="Welcome!"
            subtitle="Take a quick a look around, before diving in!"
            img="/logo.png"
            padded={true}
            ImgRound={true}
            link="/Chapters/DownloadAndSetupPage"
            target=""
          ></Chapter>
          <Chapter
            title="Getting started"
            subtitle="The first steps towards a full gentoo system!"
            img="/logo.png"
            padded={true}
            ImgRound={true}
            link="/Chapters/DownloadAndSetupPage"
            target=""
          ></Chapter>
          <Chapter
            title="Installing Gentoo"
            subtitle="It's in the title, get all the way to a functional gentoo system"
            img="/logo.png"
            padded={true}
            ImgRound={true}
            link="/Chapters/DownloadAndSetupPage"
            target=""
          ></Chapter>

          <Text variant="lg">
            <div className="opacity-70 text-center pt-2">
              Other pretty pages
            </div>
          </Text>
          <Chapter
            title="Information"
            subtitle="More information about the site"
            link="/Chapters/InfoPage"
          ></Chapter>
          <Chapter
            title="Landing Page"
            subtitle="Go back to Gentoo.guide's pretty homepage"
            img="/GentooGuide.png"
            padded={false}
            ImgRound={true}
            link="/"
            target=""
          ></Chapter>
          <Text variant="lg">
            <div className="opacity-70 text-center pt-2">Gentoo wiki</div>
          </Text>

          <Chapter
            title="Gentoo Wiki"
            subtitle="A quick link, leading to the official gentoo wiki"
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

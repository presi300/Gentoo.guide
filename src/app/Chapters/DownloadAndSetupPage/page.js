"use client";
import React from "react";
import * as fmt from "../../components/FormattedText/Fmt";
import Text from "../../components/Text/Text";
import Skeleton from "../../components/Skeleton/Skeleton";
import SideBarElementExtended from "../../components/SideBar/SideBarElementExtended";
import ShellBoxOutput from "@/app/components/ShellBox/ShellBoxOutput";
import AttentionBox from "@/app/components/AttentionBox/AttentionBox";
import ShellBox from "@/app/components/ShellBox/ShellBox";
import ChapterEnd from "@/app/components/ChapterEnd/ChapterEnd";
import Image from "next/image";
import { useState, useEffect } from "react";
import tl from "./translations.json";
import LoadText from "@/app/components/LangSwitcher/Loader.server";

export default function DwAndSetup({}) {
  let [lmao, lmaoHandler] = useState(tl.lang.enUS);

  useEffect(() => {
    window.onload = LoadText(tl).then((Content) => lmaoHandler(Content));
    window.onload = console.log(tl);
  });

  return (
    <div className="">
      <fmt.ThatElementThatTheSideBarNavigatesTo
        Nid={lmao.Anchors.A0}
      ></fmt.ThatElementThatTheSideBarNavigatesTo>
      <fmt.SectionMain
        title={lmao.SectionMain1.Title}
        subTitle={lmao.SectionMain1.STitle}
      >
        <fmt.ThatElementThatTheSideBarNavigatesTo
          Nid={lmao.Anchors.A1}
        ></fmt.ThatElementThatTheSideBarNavigatesTo>

        <fmt.Section title={lmao.SectionMain1.Section1.Title}>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain1.Section1.TB1}
          ></fmt.TextBoxWithFormatting>
        </fmt.Section>

        <fmt.ThatElementThatTheSideBarNavigatesTo
          Nid={lmao.Anchors.A2}
        ></fmt.ThatElementThatTheSideBarNavigatesTo>

        <fmt.Section title={lmao.SectionMain1.Section2.Title}>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain1.Section2.TB1}
          ></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              `${lmao.SectionMain1.Section2.List1.E1}`,
              `${lmao.SectionMain1.Section2.List1.E2}`,
              `${lmao.SectionMain1.Section2.List1.E3}`,
            ]}
          ></fmt.List>

          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain1.Section2.TB2}
          ></fmt.TextBoxWithFormatting>
        </fmt.Section>
      </fmt.SectionMain>

      <fmt.ThatElementThatTheSideBarNavigatesTo
        Nid={lmao.Anchors.A3}
      ></fmt.ThatElementThatTheSideBarNavigatesTo>

      <fmt.SectionMain
        title={lmao.SectionMain2.Title}
        subTitle={lmao.SectionMain2.STitle}
      >
        <fmt.Section title={lmao.SectionMain2.Section1.Title}>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section1.TB1}
          ></fmt.TextBoxWithFormatting>
          <ShellBox dir="~" command="fdisk -l"></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section1.TB2}
          ></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="attention"
            text={lmao.SectionMain2.Section1.AB1}
          ></AttentionBox>
        </fmt.Section>

        <fmt.ThatElementThatTheSideBarNavigatesTo
          Nid={lmao.Anchors.A4}
        ></fmt.ThatElementThatTheSideBarNavigatesTo>

        <fmt.Section title={lmao.SectionMain2.Section2.Title}>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section2.TB1}
          ></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="regular"
            command="ls /sys/firmware/efi"
            dir="~"
          ></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section2.TB2}
          ></fmt.TextBoxWithFormatting>
        </fmt.Section>

        <fmt.ThatElementThatTheSideBarNavigatesTo
          Nid={lmao.Anchors.A5}
        ></fmt.ThatElementThatTheSideBarNavigatesTo>

        <fmt.Section title={lmao.SectionMain2.Section3.Title}>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB1}
          ></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="wipefs -a /dev/<disk>"
          ></ShellBox>
          <AttentionBox
            variant="attention"
            text={lmao.SectionMain2.Section3.AB1}
          ></AttentionBox>
          <AttentionBox
            variant="note"
            text={lmao.SectionMain2.Section3.AB2}
          ></AttentionBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB2}
          ></fmt.TextBoxWithFormatting>
          <fmt.Label>UEFI</fmt.Label>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB3}
          ></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              `${lmao.SectionMain2.Section3.List1.E1}`,
              `${lmao.SectionMain2.Section3.List1.E2}`,
              `${lmao.SectionMain2.Section3.List1.E3}`,
            ]}
          ></fmt.List>
          {/* <fmt.NonTextElement
            variant="image"
            img="/GPT.png"
            imgW="800"
            aImgW="1100"
          ></fmt.NonTextElement> */}
          <AttentionBox
            variant="note"
            text={lmao.SectionMain2.Section3.AB3}
          ></AttentionBox>
          <div className="my-4">
            <fmt.Label>Legacy BIOS</fmt.Label>
          </div>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB4}
          ></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              `${lmao.SectionMain2.Section3.List2.E1}`,
              `${lmao.SectionMain2.Section3.List2.E2}`,
            ]}
          ></fmt.List>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB5}
          ></fmt.TextBoxWithFormatting>
          {/* TODO: FIX THIS ELEMENT */}
          {/* <fmt.NonTextElement */}
          {/* variant="image" */}
          {/* img="/MBR.png" */}
          {/* imgW="800" */}
          {/* aImgW="1100" */}
          {/* ></fmt.NonTextElement> */}
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB6}
          ></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              `${lmao.SectionMain2.Section3.List3.E1}`,
              `${lmao.SectionMain2.Section3.List3.E2}`,
              `${lmao.SectionMain2.Section3.List3.E3}`,
              `${lmao.SectionMain2.Section3.List3.E4}`,
            ]}
          ></fmt.List>
          <AttentionBox
            variant="note"
            text={lmao.SectionMain2.Section3.AB4}
          ></AttentionBox>
          <AttentionBox
            variant="attention"
            text={lmao.SectionMain2.Section3.AB5}
          ></AttentionBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB7}
          ></fmt.TextBoxWithFormatting>
          <fmt.Label> UEFI</fmt.Label>
          <ShellBox
            variant="root"
            dir="~"
            command="mkfs.fat -F32 /dev/<EFI partition>"
          ></ShellBox>
          <ShellBox
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/<ROOT partition>"
          ></ShellBox>
          <ShellBox
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/<HOME partition>"
          ></ShellBox>
          <AttentionBox
            variant="attention"
            text={lmao.SectionMain2.Section3.AB6}
          ></AttentionBox>
          <fmt.Label>Legacy BIOS</fmt.Label>
          <ShellBox
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/<ROOT partition>"
          ></ShellBox>
          <ShellBox
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/<HOME partition>"
          ></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB8}
          ></fmt.TextBoxWithFormatting>
          <fmt.Label>UEFI</fmt.Label>
          <ShellBoxOutput
            dir="~"
            command="fdisk -l"
            output={
              <Image
                src="/fdiskGpt.png"
                alt="An image, showing the output of the fdisk command for UEFI devices"
                width={1000}
                height={200}
                className="w-full max-w-[500px] mb-7"
              ></Image>
            }
          ></ShellBoxOutput>
          <fmt.Label>Legacy BIOS</fmt.Label>
          <ShellBoxOutput
            dir="~"
            command="fdisk -l"
            output={
              <Image
                src="/fdiskDos.png"
                alt="An image, showing the output of the fdisk command for DOS devices"
                width={1000}
                height={200}
                className="w-[95%] max-w-[500px] mb-7"
              ></Image>
            }
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section3.TB9}
          ></fmt.TextBoxWithFormatting>
        </fmt.Section>

        <fmt.ThatElementThatTheSideBarNavigatesTo
          Nid={lmao.Anchors.A6}
        ></fmt.ThatElementThatTheSideBarNavigatesTo>

        <fmt.Section title={lmao.SectionMain2.Section4.Title}>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB1}
          ></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="mkdir /mnt/gentoo"
          ></ShellBox>

          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB2}
          ></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="mount <Root Partition> /mnt/gentoo "
          ></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB3}
          ></fmt.TextBoxWithFormatting>

          <ShellBox
            variant="root"
            dir="~"
            command="mkdir /mnt/gentoo/boot"
          ></ShellBox>
          <fmt.Label>{lmao.SectionMain2.Section4.LBL1}</fmt.Label>
          <ShellBox
            variant="root"
            dir="~"
            command="mkdir /mnt/gentoo/home"
          ></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB4}
          ></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="mount <EFI partition> /mnt/gentoo/boot"
          ></ShellBox>
          <fmt.Label>{lmao.SectionMain2.Section4.LBL2}</fmt.Label>
          <ShellBox
            variant="root"
            dir="~"
            command="mount <Home partition> /mnt/gentoo/home"
          ></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB5}
          ></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="note"
            text={lmao.SectionMain2.Section4.AB1}
          ></AttentionBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB6}
          ></fmt.TextBoxWithFormatting>
          <fmt.NonTextElement
            variant="image"
            img="/Downloads.png"
            alt="An image, showing how to download gentoo linux"
            imgW={800}
            imgH={740}
            mImgH="740px"
            mImgW="800px"
          ></fmt.NonTextElement>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB7}
          ></fmt.TextBoxWithFormatting>
          <fmt.NonTextElement
            variant="image"
            alt="An image, showing how to download gentoo linux"
            imgW={800}
            imgH={700}
            mImgW="800px"
            mImgH="700px"
            img="/rightclick.png"
          ></fmt.NonTextElement>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB8}
          ></fmt.TextBoxWithFormatting>
          <ShellBox dir="/mnt/gentoo" command="wget <Copied URL>"></ShellBox>
          <AttentionBox
            variant="note"
            text={lmao.SectionMain2.Section4.AB2}
          ></AttentionBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB9}
          ></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="/mnt/gentoo"
            command="tar -xvf `ls | grep stage3`"
          ></ShellBox>
          <fmt.TextBoxWithFormatting
            text={lmao.SectionMain2.Section4.TB10}
          ></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            dir="/mnt/gentoo"
            command="ls"
            outputVariant="image"
            output={
              <Image
                className="scale-100  max-w-[800px] w-full"
                alt="An image showing the output of the ls command in the /mnt/gentoo directory"
                src="/ls1.png"
                width={1900}
                height={180}
              ></Image>
            }
          ></ShellBoxOutput>
          <ChapterEnd
            EndTitle={lmao.ChEnd.Title}
            EndSubTitle={lmao.ChEnd.STitle}
            EndBtnText={lmao.ChEnd.Btn}
            NextChapter="InstallationPage"
          ></ChapterEnd>
        </fmt.Section>
      </fmt.SectionMain>
      <Skeleton topBarVariant="hamburger">
        <SideBarElementExtended
          text={lmao.Anchors.A0}
          content={[`${lmao.Anchors.A1}`, `${lmao.Anchors.A2}`]}
        ></SideBarElementExtended>
        <SideBarElementExtended
          text={lmao.Anchors.A3}
          content={[
            `${lmao.Anchors.A4}`,
            `${lmao.Anchors.A5}`,
            `${lmao.Anchors.A6}`,
          ]}
        ></SideBarElementExtended>
      </Skeleton>
    </div>
  );
}

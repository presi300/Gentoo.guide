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
import TextFileBox from "@/app/components/TextFileBox/TextFileBox";

export default function InstallationPage({}) {
  return (
    <div>
      <fmt.SectionMain
        title="Setting up gentoo linux"
        subTitle="This page will get you all the way to an installed gentoo system!"
      >
        <fmt.Section title="Configuring make.conf">
          <fmt.TextBoxWithFormatting text="Before proceeding with the next steps, it's important to configure certain things in out make.conf. It is fully possible to do these configuration steps later, however I <b>strongly</b> recommend doing them now to avoid issues later on. <br/><br/> That being said, this guide will only go through basic, widely applicable configuration configuration, as going in much deeper would just be re-telling a big part of the gentoo wiki.<br/><br/> For more information <a target='_blank' class='yej' href='https://wiki.gentoo.org/wiki//etc/portage/make.conf'>Click Here</a>!<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>COMMON_FLAGS</fmt.Label>
          <fmt.TextBoxWithFormatting text="Defines basic compiler flags. You can add '-march=native' if you want a bit of extra performance, otherwise leave at default, unless you know what you're doing.<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>CFLAGS, CXXFLAGS, FCFLAGS, FFLAGS</fmt.Label>
          <fmt.TextBoxWithFormatting text="Tells the different compilers how to use your <b>COMMON_FLAGS</b>. Leave at default, unless you know what you're doing.<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>MAKEOPTS</fmt.Label>
          <fmt.TextBoxWithFormatting text="Already explained on the 1st page, set to '-j{number of CPU cores}'<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>ACCEPT_LICENSE</fmt.Label>
          <fmt.TextBoxWithFormatting text="Already explained on the 1st page, set to '*'<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>CPU_FLAGS_X86</fmt.Label>
          <fmt.TextBoxWithFormatting text="Tells the compiler which features are supported by your CPU. We'll set this one a bit later...<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>VIDEO_CARDS</fmt.Label>
          <fmt.TextBoxWithFormatting text="Tells portage which graphics driver to install.<br/><br/>Intel GPU users, set to: 'intel'<br/><br/>"></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="attention"
            text="People using 2nd gen core processors or older should set it to: 'intel i915'"
          ></AttentionBox>
          <fmt.TextBoxWithFormatting text="AMD GPU users, set to: 'amdgpu radeonsi'<br/><br/>People who wish to use the AMDGPU-PRO proprietary driver should leave this unset and <a target='_blank' href='https://wiki.gentoo.org/wiki/AMDGPU-PRO' class='yej'>Consult the AMDGPU-PRO wiki.</a><br/><br/>NVIDIA GPU users, set to: 'nvidia' if you want to use the proprietary NVIDIA driver or to 'nouveau' if you want to use it's open source re-implementation.<br/><br/>"></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="note"
            text="There is an entire section dedicated to setting up the NVIDIA driver and hybrid graphics which is located further down."
          ></AttentionBox>
        </fmt.Section>

        <fmt.Section title="Chrooting in...">
          <fmt.TextBoxWithFormatting text="Now that we have our partitions setup and our stage3 extracted, it's time to <b>chroot</b> into the previously extracted stage3 base system. <br/><br/>But what is chroot? Chroot is the process of changing the root directory of a running process. <br/><br/> TL;DR for our usecase, it allows us to use the gentoo base system from our LiveISO of choice"></fmt.TextBoxWithFormatting>
        </fmt.Section>
      </fmt.SectionMain>
      <Skeleton topBarVariant="hamburger"></Skeleton>
    </div>
  );
}

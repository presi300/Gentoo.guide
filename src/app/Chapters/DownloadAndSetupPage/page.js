"use client";
import React from "react";
import * as fmt from "../../components/FormattedText/Fmt";
import Text from "../../components/Text/Text";
import Skeleton from "../../components/Skeleton/Skeleton";
import SideBarElementExtended from "../../components/SideBar/SideBarElementExtended";
import ShellBoxOutput from "@/app/components/ShellBox/ShellBoxOutput";
import AttentionBox from "@/app/components/AttentionBox/AttentionBox";

export default function DwAndSetup({}) {
  return (
    <div>
      <fmt.SectionMain
        title="Getting started"
        subTitle="This page will let you know all about what an installation enviroment is, how to set it up and how to use it to get started."
      >
        <fmt.Section title="What is an installation environment?">
          <fmt.TextBoxWithFormatting text="An <b>installation environment</b>, also known as a <b>live ISO</b> is exactly what the name suggests - an environment for installing a linux distribution, in this case - Gentoo. <br/><br/>Most linux distributions ship their own <b>installation environment</b> (LiveISO) and Gentoo is no different, however I'd advise against using the one, provided by Gentoo. It makes the installation process unnecessarily difficult by not having a desktop environment.<br><br/>Gentoo can be installed using any other linux distribution's <b>installation environment</b>, most of which have a nice pre-configured desktop that makes the whole installation process a lot less annoying by allowing you to copy-paste long commands and to do something else while waiting for it to finish. <br/><br/> For this guide, I'll be using a <a class='yej' href='https://linuxmint.com/'>Linux Mint</a> live ISO, however as mentioned previously, pretty much any other distribution's live ISO should also get the job done."></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Downloading and setting up the installation environment">
          <fmt.TextBoxWithFormatting text="Before beginning, you are gonna need a few things: <br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              "USB drive with a capacity of 4GB or more.",
              "Access to the internet.",
              "A few spare hours.",
            ]}
          ></fmt.List>
          <fmt.TextBoxWithFormatting text="I'm gonna assume that anyone who's gotten to this point already knows how to flash an ISO to a flash drive and boot from it, however I am still gonna mention <a class='yej' href='https://www.ventoy.net/'>Ventoy</a>, because it's cool.<br/><br/>Now that you've booted off your chosen distro's live ISO, it's time to actually install Gentoo, starting with:"></fmt.TextBoxWithFormatting>
        </fmt.Section>
      </fmt.SectionMain>

      <fmt.SectionMain
        title="Getting the partitions ready"
        subTitle="Yeah, this part is all about disks and partitions. "
      >
        <fmt.Section title="Choosing a disk">
          <fmt.TextBoxWithFormatting text="Before doing any partitioning, you firstly need to choose a disk to be partitioned. There are no strict restrictions about what disk should be used, however it is generally recommended to install any operating system on an SSD, instead of an HDD.<br/><br/> To check the names of all disks, currently connected to your system, use: "></fmt.TextBoxWithFormatting>
          <ShellBoxOutput dir="~" command="fdisk -l"></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="SATA disks should appear as /dev/sd*, NVME disks should appear as /dev/nvme*n*.<br/><br/> "></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="attention"
            text="A virtual disk (/dev/vda) will be used in all examples, make sure to replace that with your chosen disk, wherever necessary."
          ></AttentionBox>
        </fmt.Section>
        <fmt.Section title="Figuring out what partitions are actually needed">
          <fmt.TextBoxWithFormatting text="There is a slight catch that needs to be taken care of, before proceeding with partitioning the disk. That being whether your system is <b>Legacy BIOS</b> or <b>UEFI</b>, as the following steps differ slightly for each one. If you are unsure about your system, you can type the following command:"></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            variant="regular"
            command="ls /sys/firmware/efi"
            dir="~"
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="If the command errors out, your system is <b>legacy BIOS</b> and if it doesn't, it's <b>UEFI</b>."></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Setting up partitions">
          <fmt.TextBoxWithFormatting text="For the following steps, you can use whichever disk management program you want (e.g. gparted, GNOME disks, etc), <b>cfdisk</b> will be used for the demonstration.<br/><br/> 1st, wipe the existing partition table on the chosen disk:"></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="wipefs -a /dev/<disk>"
          ></ShellBoxOutput>
          <AttentionBox
            variant="attention"
            text="This action WILL delete *ALL* data on the selected disk and is NOT
            reversible! Proceed with caution!"
          ></AttentionBox>
          <AttentionBox
            variant="note"
            text="These steps aren't *strictly* necessary, as it is possible to resize an existing partition and do the following steps along side it, however resizing partition is a notoriously janky process and could result in lost data. Proceed with caution either way! "
          ></AttentionBox>
          <fmt.TextBoxWithFormatting text="After that, depending on whether your computer is <b>legacy BIOS</b> or <b>UEFI</b>, you're gonna have to set the disks up a little bit differently: <br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>UEFI</fmt.Label>
          <fmt.TextBoxWithFormatting text="Set the partition table to GPT<br/>Create 3 partitions:<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              "512MB type: EFI system",
              "If possible, at least 30GB, type: Linux filesystem, (root)",
              "If possible, least 50GB, type: Linux filesystem, (home) [optional]",
            ]}
          ></fmt.List>
          <fmt.NonTextElement
            variant="image"
            img="/GPT.png"
            imgW="800"
            aImgW="1100"
          ></fmt.NonTextElement>
          <AttentionBox
            variant="note"
            text="I've used partitions that are smaller than recommended in the example, as it's just there for demonstration purposes."
          ></AttentionBox>
          <div className="my-4">
            <fmt.Label>Legacy BIOS</fmt.Label>
          </div>
          <fmt.TextBoxWithFormatting text="Set the partition table to MBR/DOS<br/>Create 2 partitions:<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              "if possible, at least 30GB, primary, type: Linux, (root)",
              "If possible, at least 50GB, primary, type: Linux, (home) [optional]",
            ]}
          ></fmt.List>
          <fmt.TextBoxWithFormatting text="Set the partition you created for using as root to bootable"></fmt.TextBoxWithFormatting>
          <fmt.NonTextElement
            variant="image"
            img="/MBR.png"
            imgW="800"
            aImgW="1100"
          ></fmt.NonTextElement>
          <fmt.TextBoxWithFormatting text="But what about swap?<br/><br/>Don't worry about it, we'll get there when we get there. (Check the setting up zram swap chapter for more info on that)<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.TextBoxWithFormatting text="Alright, now that you've made your partitions, it's time to format them appropriately. <br/><br/> You have a choice to make with the file system you want to use, as each one has it's own unique advantages. Here are some of the more common file systems:<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              "ext4 - the default, use it if you just want your system to work.",
              "btrfs - a more modern option, offers file system level snapshots, in case something goes wrong.",
              "xfs - an alternative file system, sorta similar to ext4.",
              "bcachefs - an alternative, experimental file system, which offers similar advantages to btrfs. While it provides similar advantages, it operates completely differently from btrfs and any other file system.",
            ]}
          ></fmt.List>
          <AttentionBox
            variant="note"
            text="This guide is written with *ext4* in mind, though the steps should be mostly the same for all the other file systems, additional reading might be a good idea if you decide to use them, ESPECIALLY for *bcachefs*. "
          ></AttentionBox>
          <AttentionBox
            variant="attention"
            text="Bcachefs requires at least Linux 6.7 to work."
          ></AttentionBox>
          <fmt.TextBoxWithFormatting text="Now that you've chosen your file system, it's time to format your partitions with it. In the example case:<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label> UEFI</fmt.Label>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkfs.fat -F32 /dev/vda1"
          ></ShellBoxOutput>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/vda2"
          ></ShellBoxOutput>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/vda3"
          ></ShellBoxOutput>
          <AttentionBox
            variant="attention"
            text="It is VERY important that your EFI System partition (/dev/vda1 in the example case) be formatted as FAT32!"
          ></AttentionBox>
          <fmt.Label>Legacy BIOS</fmt.Label>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/vda1"
          ></ShellBoxOutput>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkfs.ext4 /dev/vda2"
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="At this point, your disk's partition table should looks something like this: <br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>UEFI</fmt.Label>
          <ShellBoxOutput
            dir="~"
            command="fdisk -l"
            output={
              <div className="my-2">
                {/*prettier-ignore*/}
                <pre>
                Device        Start      End  Sectors  Size Type <br></br>
                /dev/vda1      2048  1050623  1048576  512M EFI System <br></br>
                /dev/vda2   1050624 22022143 20971520   10G Linux filesystem <br></br>
                /dev/vda3  22022144 52428766 30406623 14.5G Linux filesystem <br></br>
                </pre>
              </div>
            }
          ></ShellBoxOutput>
          <fmt.Label>Legacy BIOS</fmt.Label>
          <ShellBoxOutput
            dir="~"
            command="fdisk -l"
            output={
              <div className="my-2">
                {/*prettier-ignore*/}
                <pre>
                Device     Boot    Start      End  Sectors Size Id Type <br></br>
                /dev/vda1  *        2048 20973567 20971520  10G 83 Linux <br></br>
                /dev/vda2       20973568 52428799 31455232  15G 83 Linux <br></br>
                </pre>
              </div>
            }
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="Everything looks good? Now it's time to:"></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Mount partitions and setup 'stage 3'">
          <fmt.TextBoxWithFormatting text="Before going any further, you might wonder, what's a 'stage 3' ? <br/><br/> A 'stage 3' is simply an archived, basic gentoo system, which needs to be extracted on a disk partition in order for anything useful to be done with it. <br/><br/> Before any of that can be done, however, you need to mount your newly created partitions first. Here's how that's done:<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.TextBoxWithFormatting text="1st, create a root mount point:"></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            dir="~"
            variant="root"
            command="mkdir /mnt/gentoo"
          ></ShellBoxOutput>

          <fmt.TextBoxWithFormatting text="2nd, mount the root partition:"></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            dir="~"
            variant="root"
            command="mount <Root Partition> /mnt/gentoo "
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="3rd, create the other mount points:"></fmt.TextBoxWithFormatting>

          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkdir /mnt/gentoo/boot"
          ></ShellBoxOutput>
          <fmt.Label>If you have created a separate /home partition:</fmt.Label>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mkdir /mnt/gentoo/home"
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="4th, mount the other partitions:"></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mount <EFI partition> /mnt/gentoo/boot"
          ></ShellBoxOutput>
          <fmt.Label>If you have created a separate /home partition:</fmt.Label>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="mount <Home partition> /mnt/gentoo/home"
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text=" - Wait, aren't these 'mount points' just directories? <br/><br/> Yes! On linux, disk partitions are mounted as directories.<br/><br/>"></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="note"
            text="You should still create /mnt/gentoo/boot even if your system is not EFI."
          ></AttentionBox>
        </fmt.Section>
      </fmt.SectionMain>
      <Skeleton topBarVariant="hamburger"></Skeleton>
    </div>
  );
}

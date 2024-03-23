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
          <fmt.TextBoxWithFormatting text="Before proceeding with the next steps, it's important to configure certain things in  make.conf. It is fully possible to do these configuration steps later, however I <b>strongly</b> recommend doing them now in order to avoid issues later on. <br/><br/> That being said, this guide will only go through basic, widely applicable configuration, as going in much deeper would just be re-telling a big part of the gentoo wiki.<br/><br/> For more information about configuring make.conf <a target='_blank' class='yej' href='https://wiki.gentoo.org/wiki//etc/portage/make.conf'>Click Here</a>!<br/><br/>"></fmt.TextBoxWithFormatting>
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
          <fmt.Label>GRUB_PLATFORMS</fmt.Label>
          <fmt.TextBoxWithFormatting text="If you have an <b>UEFI</b> system, set to: <b>'efi-64'</b>, if not, do not set."></fmt.TextBoxWithFormatting>
          <fmt.Label>EMERGE_DEFAULT_OPTS</fmt.Label>
          <fmt.TextBoxWithFormatting text="Adds options to the emerge command, without you having to type them. Example: <br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            EMERGE_DEFAULT_OPTS="--ask"
          </TextFileBox>
          <fmt.TextBoxWithFormatting text="Is the same as you typing:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox dir="~" variant="root" command="emerge --ask"></ShellBox>
          <fmt.TextBoxWithFormatting text="Every time.<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.TextBoxWithFormatting text="Here is what an example, configured <b>make.conf</b> looks like:<br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            <ul>
              <li># Stuff</li>
              <li>COMMON_FLAGS="-O2 -pipe -march=native"</li>
              <li>
                <br></br>
              </li>
              <li>CFLAGS="${"{COMMON_FLAGS}"}"</li> {/* FFS, react */}
              <li>CXXFLAGS="${"{COMMON_FLAGS}"}"</li>
              <li>FCFLAGS="${"{COMMON_FLAGS}"}"</li>
              <li>FFLAGS="${"{COMMON_FLAGS}"}"</li>
              <li>
                <br></br>
              </li>
              <li>MAKEOPTS="-j4"</li>
              <li>
                USE="pipewire wayland jack vulkan elogind raytracing bluetooth
                -clang -systemd"
              </li>
              <li>
                <br></br>
              </li>
              <li>ACCEPT_LICENSE="*"</li>
              <li>
                <br></br>
              </li>
              <li>EMERGE_DEFAULT_OPTS="--ask"</li>
              <li>
                <br></br>
              </li>
              <li>VIDEO_CARDS="intel"</li>
              <li>
                <br></br>
              </li>
              <li>GRUB_PLATFORMS="efi-64"</li>
            </ul>
          </TextFileBox>
          <fmt.Label>Using gentoo with binary packages</fmt.Label>
          <fmt.TextBoxWithFormatting text="Ok, let's just say that you really don't wanna wait for programs to compile or your computer just doesn't quite do it when it comes to compiling huge packages, like desktop environments and firefox.<br/><br/> Well, you're in luck, as recently the gentoo team has introduced official <b>binary repositories</b>. Enabling their use is as simple as adding:<br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            FEATURES="getbinpkg"
          </TextFileBox>
          <fmt.TextBoxWithFormatting text="Into your make.conf. Do note that not every package has a binary at this point of time and this feature simply tells portage to pull from the binary repository, <b>whenever possible.</b><br/><br/><b>Got all that? Now let's begin the actual installation by:</b><br/><br/>"></fmt.TextBoxWithFormatting>
        </fmt.Section>

        <fmt.Section title="Chrooting in...">
          <fmt.TextBoxWithFormatting text="Now that we have our partitions and <b>make.conf</b> setup and our <b>stage3</b> extracted, it's time to <b>chroot</b> into the previously mentioned stage3 base system. <br/><br/>But what is chroot? It is the process of changing the root directory of a running process. <br/><br/> For our usecase, it allows us to directly use the gentoo base system from our LiveISO of choice as if it was already installed.<br/><br/>However, before doing that, as always, there a few extra steps:"></fmt.TextBoxWithFormatting>
          <fmt.Label>1st, Copy DNS info</fmt.Label>
          <fmt.TextBoxWithFormatting text="This is really important, as without copying the DNS info from the LiveISO, you will lose your internet connection once you chroot.<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="cp --dereference /etc/resolv.conf /mnt/gentoo/etc/"
          ></ShellBox>
          <fmt.Label>Then, mount the pseudo-filesystems</fmt.Label>
          <fmt.TextBoxWithFormatting text="Pseudo-filesystems are pretty complicated and explaining them is outside the scope of this guide, just think of them as something necessary for the chrooted system to work properly. If you want to read more about them, <a href='https://superuser.com/questions/1198292/what-is-a-pseudo-file-system-in-linux' class='yej' target='_blank'>Click Here!</a>.<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.TextBoxWithFormatting text="There are two ways of going about doing this, the <b>automatic</b> way and the <b>manual</b> way. The automatic way is a lot easier, however is requires that <b>Arch Install Scripts</b> be installed on your LiveISO of choice, which may or may not be possible, depending on the one you've chosen. <br/><br/> On the linux mint LiveISO, installing <b>Arch Install Scripts</b> is as simple as running:"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="apt install arch-install-scripts"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="After which, chrooting into the stage3 is as simple as running:"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="arch-chroot /mnt/gentoo"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="The <b>manual</b> method is a bit more complicated, however it should work, regardless of your LiveISO of choice.<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --types proc /proc /mnt/gentoo/proc "
          ></ShellBox>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --rbind /sys /mnt/gentoo/sys  "
          ></ShellBox>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --make-rslave /mnt/gentoo/sys "
          ></ShellBox>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --make-rslave /mnt/gentoo/dev "
          ></ShellBox>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --rbind /dev /mnt/gentoo/dev "
          ></ShellBox>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --bind /run /mnt/gentoo/run "
          ></ShellBox>
          <ShellBox
            dir="~"
            variant="root"
            command="mount --make-slave /mnt/gentoo/run "
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="These commands will mount all of the necessary <b>pseudo-filesystems</b> that were mentioned above, after which we can chroot by running:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="chroot /mnt/gentoo /bin/bash"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="But it's not over yet! After chrooting, you need to reload the shell to be able to use commands from the chroot, which can be done by running:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="source /etc/profile"
          ></ShellBox>
          <ShellBox
            variant="root"
            dir="~"
            command="export PS1='(chroot) ${PS1}'"
          ></ShellBox>
          <AttentionBox
            variant="note"
            text="The export command at the end is optional, all it does is that it puts (chroot) before your shell. It is entirely a visual thing."
          ></AttentionBox>
          <fmt.TextBoxWithFormatting text="With all of that done, congratulations, you are now technically using gentoo! Now, lets get it actually installed on your system, starting by:"></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Initializing portage and installing base packages">
          <fmt.TextBoxWithFormatting text="A large part of the gentoo instsllation process if fully automated, however before getting to that part, you have to configure some things by yourself.<br/><br/>Before installing anything however, you're firts gonna need to initialize portage by running:"></fmt.TextBoxWithFormatting>
          <ShellBox variant="root" dir="~" command="emerge-webrsync"></ShellBox>
          <fmt.TextBoxWithFormatting text="After which, you can test if it's working by installing your first (and most important) package"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="emerge -a neofetch"
          ></ShellBox>
          <ShellBoxOutput
            dir="~"
            variant="root"
            command="neofetch"
            outputVariant="image"
            output={
              <Image
                src="/Neofetch.png"
                width={1000}
                height={500}
                className="max-w-[800px] w-full"
              ></Image>
            }
          ></ShellBoxOutput>
        </fmt.Section>
      </fmt.SectionMain>
      <Skeleton topBarVariant="hamburger"></Skeleton>
    </div>
  );
}

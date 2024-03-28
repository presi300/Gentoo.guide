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
          <fmt.Label>USE</fmt.Label>
          <fmt.TextBoxWithFormatting text="Already mentioned on the 1st page, however there is more to it than what was explained there. USE can dictate both which features you want and which ones you don't. For example:<br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            USE="wayland bluetooth"
          </TextFileBox>
          <fmt.TextBoxWithFormatting text="Will tell portage to compile programs with bletooth and wayland support, wherever applicable. However, some packages might have default features that you don't want or they might have several optional dependencies listed for automatic install, unless told otherwise. You can prevent this by putting a - in front of the features you do not want: <br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            USE="wayland -bluetooth"
          </TextFileBox>
          <fmt.TextBoxWithFormatting text="This will tell portage to install the packages who ask about wayland support, with wayland support and the ones who ask about bluetooth support, without it."></fmt.TextBoxWithFormatting>
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
          <fmt.TextBoxWithFormatting text="Into your make.conf. Do note that not every package has a binary at this point of time and this feature simply tells portage to pull from the binary repository, <b>whenever possible.</b><br/><br/>"></fmt.TextBoxWithFormatting>
          <AttentionBox
            variant="note"
            text="You might get keyring issues when attempting to install binary packages, you can fix them by running 'getuto' and installing (reinstalling) 'sec-keys/openpgp-keys-gentoo-release'"
          ></AttentionBox>
          <fmt.TextBoxWithFormatting text="<b>Got all that? Now let's begin the actual installation by:</b><br/><br/>"></fmt.TextBoxWithFormatting>
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
          <fmt.TextBoxWithFormatting text="Now that portage is working, it's time to go back to <b>CPU_FLAGS_X86</b> again. As mentioned before, it lets the various compilers which X86_64 features your particular CPU supports. <br/><br/> Explaining said features is outside the scope of this guide, but the TL;DR for this usecase is that letting the compilers know which features your CPU supports equals more performance.<br/><br/> To see which features are supported by your particular cpu, you can use a tool called <b>cpuid2cpuflags</b>, which can be installed by running:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="emerge -a cpuid2cpuflags"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="After it's installed, run:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="cpuid2cpuflags >> /etc/portage/make.conf"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="After that, open /etc/portage/make.conf with <b>nano</b> and at the bottom of the file you should see something like this: <br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            CPU_FLAGS_X86: aes avx f16c fma3 fma4 mmx mmxext polmul popent sse
            ssez sse3 sse4_1 sse4_2 sse4a ssse3 xop
          </TextFileBox>
          <fmt.TextBoxWithFormatting text="Change it to: (replace the colon with an equals and add quotes around the flags)<br/><br/>"></fmt.TextBoxWithFormatting>
          <TextFileBox fileName="/etc/portage/make.conf">
            CPU_FLAGS_X86="aes avx f16c fma3 fma4 mmx mmxext polmul popent sse
            ssez sse3 sse4_1 sse4_2 sse4a ssse3 xop"
          </TextFileBox>
          <fmt.TextBoxWithFormatting text="Now, let's actually start installing some of the base packages.<br/><br/>"></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Networking stack">
          <fmt.TextBoxWithFormatting text="There are a few choices when it comes to a networking stack, however this guide is written with <b>Network Manager</b> in mind, as it's the most widely supported and feature rich one.<br/><br/>You can check out some of the other options by clicking <a href='https://wiki.gentoo.org/wiki/Handbook:AMD64/Installation/Networking' class='yej' target='_blank'>Here</a> <br/><br/><b>- But why do I need a 'networking stack', wasn't the copying resolv.conf thing supposed to take care of networking?</b><br/><br/>Copying resolv.conf simply copies the network configuration from the LiveISO, which does not carry over once the system is installed and you've booted from it. <br/><br/> TL;DR without it, networking will work until the next reboot.<br/><br/>It can be installed by typing:"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="emerge -a networkmanager"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="NetworkManager will pull a couple of dependencies, and yeah, that's it, network setup is complete."></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Linux Kernel">
          <fmt.TextBoxWithFormatting text="As you've probably heard or seen at this point, the operating system, usually referred to as 'linux', is actually GNU/Linux or in this case: 'KDE Plasma/Wayland/OpenRC/Gentoo/GNU/Linux'.<br/><br/>With that in mind, it's time to install the '<b>linux</b>' part of this entire thing.<br/><br/>-But what is a kernel?<br/><br/>A kernel is kind of like a glue that connects the hardware with the sowftware. The linux kernel in particular, however is a bit more complicated than that, as it's what's called a 'macro' kernel, meaning that it handles more than just the basic communication between the software and the hardware it also handles device drivers.<br/><br/>Configuring the linux kernel simply means choosing which drivers and features you need from it and which ones you don't.<br/><br/>Unfortunately, choosing said drivers is a complicated and extremely personalized task, which is simply impossible to fully explain in a guide like this, as every piece of hardware needs it's own specific driver or in some cases set of drivers... <br/><br/><b>Fortunately, it's completely optional!</b><br/><br/>Gentoo provides a fully configured kernel that should work flawlessly on 90% of devices. To install it, simply type:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="emerge -a gentoo-kernel-bin"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="After it's installed, make sure it's selected as active:"></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="eselect kernel list"
            output={
              <Image
                src="/KernelList.png"
                width={800}
                height={100}
                className="w-full max-w-[300px] mb-5"
              ></Image>
            }
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="Make sure there is a * next to the linux-(something)-gentoo-dist<br/><br/>Then, install linux-firmware.<br/></br>"></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="emerge -a linux-firmware"
          ></ShellBox>
          {/* TODO: add an anchor to skip to the next section */}
          <fmt.TextBoxWithFormatting text="<br/>Linux-firmware contains a bunch of extra drivers that for one reason or another could not be built directly into the kernel. TL;DR wifi is probably not gonna work without it... <br/><br/>And that's pretty much it for installing the dist-kernel, if you do not wanna bother configuring your own kernel, you are fully free to click <a href='#' class='yej'>here to skip to the next section.</a><br/><br/>For the people who want to configure their own kernel, again, it's impossible to put all of the information necessary for doing that in one guide, however with that being said, here are the basics of to do it:"></fmt.TextBoxWithFormatting>
          <fmt.Label>Choosing kernel sources</fmt.Label>
          <fmt.TextBoxWithFormatting text="Gentoo gives you the option to choose your <b>kernel sources</b>, which are gonna be the foundation for your kernel. The difference between the different sources is mainly that some of them have extra features and optimizations that may not be present in others. You can see all of the available <b>kernel sources</b> by typing:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="~"
            variant="root"
            command="emerge --search sources"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="This will list quite a lot of things, however the main ones you should pay attention to are:"></fmt.TextBoxWithFormatting>
          <fmt.List
            el={[
              "gentoo-sources - the sources that the preconfigured kernel is based on",
              "zen-sources - sources for building a slightly more optimized 'zen' kernel",
              "vanilla-sources - the regular linux sources with no modifications or optimizations",
            ]}
          ></fmt.List>
          <fmt.TextBoxWithFormatting text="All of the other 'sources' are meant for specialized uses, like the <b>asahi sources</b>, used to build linux kernels that run on apple silicon macs. Or the <b>rt-sources</b>, used to make 'realtime' linux kernels that provide certain, very complicated to explain benefits to large scale servers.<br/><br/>After you've installed your sources of choice, make sure that they are selected as the 'active' kernel."></fmt.TextBoxWithFormatting>
          <ShellBoxOutput
            dir="~"
            variant="root"
            command="eselect kernel list"
            output={
              <Image
                src="/EKList1.png"
                width={500}
                height={100}
                className="w-full mb-5 max-w-[300px]"
              ></Image>
            }
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="In this case, [1] is the sources and [2] is a dist-kernel. To select the sources, in this case you'd run:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="eselect kernel set 1"
          ></ShellBox>
          <ShellBoxOutput
            variant="root"
            dir="~"
            command="eselect kernel list"
            output={
              <Image
                src="/EKL2.png"
                width={500}
                height={100}
                className="w-full max-w-[300px] mb-5"
              ></Image>
            }
          ></ShellBoxOutput>
          <fmt.TextBoxWithFormatting text="With the sources selected and downloaded, it's time to actually configure them and build your kernel... and this is where the whole <b>very complicated</b> part comes in.<br/><br/>To properly configure a kernel, you need to know the exact model of things like your: CPU, GPU, Motherboard chipset, SATA controllers, USB2 controllers, USB3 controllers, Thunderbolt controllers, display controllers and every other little thing in your PC.<br/><br/>It's a huge trial and error process, which is why it is usually recommended to use a premade kernel for the initial setup and configure your own at a later point.<br/><br/>With all mind, let's begin by:"></fmt.TextBoxWithFormatting>
          <fmt.Label>Installing genkernel</fmt.Label>
          <fmt.TextBoxWithFormatting text="<b>Genkernel</b> is a tool, provided by gentoo that makes building and installing custom kernels much easier than doing it manually by doing things like generating <b>initramfs</b> automatically.<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="emerge -a genkernel"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="With <b>genkernel</b> installed, it's time to actually start:"></fmt.TextBoxWithFormatting>
          <fmt.Label>Configuring the kernel</fmt.Label>
          <fmt.TextBoxWithFormatting text="Kernel sources are stored at /usr/src, cd there and into the folder with the name of your chosen kernel sources.<br/><br/>After that, type:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            dir="/usr/src/linux-6.6.21-gentoo"
            variant="root"
            command="make nconfig"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="After a bit of loading, a menu like this should appear."></fmt.TextBoxWithFormatting>
          <fmt.NonTextElement
            img="/nconfig.png"
            variant="image"
            imgW={1200}
            imgH={800}
            mImgW="900px"
            mImgH="700px"
          ></fmt.NonTextElement>
          <fmt.TextBoxWithFormatting text="At this point, figuring out how to configure the kernel should go something like this:"></fmt.TextBoxWithFormatting>
          <fmt.NonTextElement
            variant="image"
            img="/EcosiaIt.png"
            imgW={1000}
            imgH={300}
            mImgW="700px"
            mImgH="200px"
          ></fmt.NonTextElement>
          <fmt.TextBoxWithFormatting text="Looking up which options need to be changed for your specific hardware is the best way of going around configuring the kernel.<br/><br/>There are a couple of useful commands that will help you find the exact hardware you need to look up the configuration for:<br/><br/>"></fmt.TextBoxWithFormatting>
          <fmt.Label>lspci</fmt.Label>
          <fmt.TextBoxWithFormatting text="Lists all PCI devices. Devices like graphics cards, NVME controllers, USB controllers and everything else connected through a PCI/PCIE interface.<br/><br/>To use it on gentoo, install the <b>pciutils</b> package and type:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox dir="~" variant="root" command="lspci"></ShellBox>
          <fmt.TextBoxWithFormatting text="You can combine <b>lspci</b> with <b>grep</b> to only get certain types of PCI devices, for example:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox
            variant="root"
            dir="~"
            command="lspci | grep VGA"
          ></ShellBox>
          <fmt.TextBoxWithFormatting text="To list only graphic cards."></fmt.TextBoxWithFormatting>
          <fmt.Label>lsusb</fmt.Label>
          <fmt.TextBoxWithFormatting text="Lists USB devices/hubs/controllers. However, it's not <b>all</b> USB things. Some PCs and laptops have internal USB  hubs/controllers wired through PCIE and will show in <b>lspci</b>.<br/><br/>To use it, install the <b>usbutils</b> package and type:<br/><br/>"></fmt.TextBoxWithFormatting>
          <ShellBox variant="root" dir="~" command="lsusb"></ShellBox>
          <fmt.TextBoxWithFormatting text="After the kernel has been configured, you can use the previously mentioned <b>genkernel</b> command to build and install it"></fmt.TextBoxWithFormatting>
        </fmt.Section>
      </fmt.SectionMain>
      <Skeleton topBarVariant="hamburger"></Skeleton>
    </div>
  );
}

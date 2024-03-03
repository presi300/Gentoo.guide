import React from "react";
import * as fmt from "../components/FormattedText/Fmt";
import Skeleton from "../components/Skeleton/Skeleton";
import Link from "next/link";
import Text from "../components/Text/Text";
import SideBarElementExtended from "../components/SideBar/SideBarElementExtended";

export default function infoPage({}) {
  return (
    <div>
      <fmt.MainFmt>
        <fmt.SectionMain
          title="Information page"
          subTitle="On this page, I'll include a bit more information about myself and the technical specifics of gentoo.guide"
        >
          <fmt.Section title="What frameworks does gentoo.guide use?">
            <fmt.TextBoxWithFormatting text="Gentoo.guide, as stated in the StartPage is written using the <b>NextJS</b> framework, using <b>TailwindCSS</b> for it's UI and <b>Framer-Motion</b> for most of the animations. <br/><br/> As for why I chose said frameworks... Because they are the most popular, yeah, that's it."></fmt.TextBoxWithFormatting>
          </fmt.Section>
          <fmt.Section title="Does gentoo.guide collect any data?">
            <fmt.TextBoxWithFormatting text="<b>No</b>. <br/><br/> The only information Gentoo.guide stores and accesses on your computer is 'LanguageID' which is a single number, necessary for the translation system to work."></fmt.TextBoxWithFormatting>
          </fmt.Section>
          <fmt.Section title="Where is gentoo.guide hosted at?">
            <div className="flex gap-2">
              <fmt.TextBoxWithFormatting text="Gentoo.guide is hosted at "></fmt.TextBoxWithFormatting>
              <fmt.Lnk href="https://vercel.com">Vercel</fmt.Lnk>
            </div>
          </fmt.Section>
          <fmt.Section title="I'm using an old browser and the site doesn't work, why?">
            <fmt.TextBoxWithFormatting
              text="Tough luck, update your browser! Using legacy browsers is a security nightmare that I do not wish to support. <br/><br/>
            "
            ></fmt.TextBoxWithFormatting>

            <fmt.TextBoxWithFormatting text="That aside if you're using a non-legacy version of a non-mainstream browser (e.g. Safari, GNOME Web) and are experiencing issues, please do open an issue on my <a href='https://codeberg.org/presi300/Gentoo.guide'>Codeberg</a> or <a href='https://github.com/presi300/Gentoo.guide'>Github</a>"></fmt.TextBoxWithFormatting>

            <fmt.Lnk href="https://codeberg.org/presi300/Gentoo.guide"></fmt.Lnk>
          </fmt.Section>
          <fmt.Section title="Who are you?">
            <div className="flex gap-2">
              <fmt.TextBoxWithFormatting text="Hi, I'm presi300, you can learn more about me by visiting"></fmt.TextBoxWithFormatting>
              <fmt.Lnk href="https://presi300.com/">My Website!</fmt.Lnk>
            </div>
          </fmt.Section>
        </fmt.SectionMain>
      </fmt.MainFmt>
      <Skeleton topBarVariant="hamburger">
        <SideBarElementExtended
          text="Yeah, nothing to navigate to here..."
          content={[""]}
        ></SideBarElementExtended>
      </Skeleton>
    </div>
  );
}

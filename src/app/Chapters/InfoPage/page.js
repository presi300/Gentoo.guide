import React from "react";
import * as fmt from "../../components/FormattedText/Fmt";
import Skeleton from "../../components/Skeleton/Skeleton";
import SideBarElementExtended from "../../components/SideBar/SideBarElementExtended";

export default function infoPage({}) {
  return (
    <div>
      <fmt.SectionMain
        title="Information page"
        subTitle="A page that gives a bit more information about gentoo.guide."
      >
        <fmt.Section title="What frameworks does gentoo.guide use?">
          <fmt.TextBoxWithFormatting text="Gentoo.guide, as stated in the StartPage is written with the <b>NextJS</b> framework, using <b>TailwindCSS</b> for it's UI and <b>Framer-Motion</b> for most of the animations. <br/><br/> As for why I chose said frameworks... Because they are the most popular, yeah, that's it."></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Does gentoo.guide collect any data?">
          <fmt.TextBoxWithFormatting text="<b>No</b>. <br/><br/> The only information Gentoo.guide stores and accesses on your computer is 'LanguageID' which is a single number, necessary for the translation system to work."></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Where is gentoo.guide hosted at?">
          <fmt.TextBoxWithFormatting text="Gentoo.guide is hosted at <a href='https://vercel.com' class='yej'>Vercel</a>"></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="I'm using an old browser and the site doesn't work, why?">
          <fmt.TextBoxWithFormatting
            text="Tough luck, update your browser! Using legacy browsers is a security nightmare that I do not wish to support. <br/><br/>
            "
          ></fmt.TextBoxWithFormatting>

          <fmt.TextBoxWithFormatting text="That aside if you're using a non-legacy version of a non-mainstream browser (e.g. Safari, GNOME Web) and are experiencing issues, please do open an issue on my <a class='yej' href='https://codeberg.org/presi300/Gentoo.guide'>Codeberg</a> or <a class='yej' href='https://github.com/presi300/Gentoo.guide'>Github</a>"></fmt.TextBoxWithFormatting>

          <fmt.Lnk href="https://codeberg.org/presi300/Gentoo.guide"></fmt.Lnk>
        </fmt.Section>
        <fmt.Section title="Why are there two ways of navigating the site?">
          <fmt.TextBoxWithFormatting text="Why not? It's never hurt anyone! <br/><br/>In all seriousness, the initial idea was to just have the one modal-style navigation pane, however after many people I showed the website to couldn't find it, I relented and added a 2nd way of navigating through the chapters in the sidebar..."></fmt.TextBoxWithFormatting>
        </fmt.Section>
        <fmt.Section title="Who are you?">
          <fmt.TextBoxWithFormatting text="Hi, I'm presi300, you can learn more about me by visiting <a href='https://presi300.com' class='yej'>My Website!</a>"></fmt.TextBoxWithFormatting>
        </fmt.Section>
      </fmt.SectionMain>
      <Skeleton topBarVariant="hamburger">
        <SideBarElementExtended
          text="Yeah, nothing to navigate to here..."
          content={[""]}
        ></SideBarElementExtended>
      </Skeleton>
    </div>
  );
}

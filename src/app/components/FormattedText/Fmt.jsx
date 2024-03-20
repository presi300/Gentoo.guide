import React from "react";
import children from "react";
import Text from "../Text/Text";
import Spacer from "./Spacer/Spacer";
import Image from "next/image";
import Link from "next/link";

export function ThatElementThatTheSideBarNavigatesTo({ Nid }) {
  // Invisible element that the sidebar uses for navigation
  // It's literally just an anchor with a funnier name
  return <div className="relative bottom-24 " id={Nid}></div>;
}

export function NonTextElement({
  children,
  variant,
  img = "/logo.png",
  imgW = 200,
  imgH = 100,
  mImgW = "200px",
  mImgH = "100px",
}) {
  return (
    <div>
      {variant === "general" && <div className="my-6">{children}</div>}
      {variant === "image" && (
        <div className="my-6">
          <div className="grid w-full place-items-center">
            <Image
              className="rounded-[15px] border-[1px] border-[#AAA1CC] my-3 mb-12"
              alt="You really should not be seeing this..."
              src={img}
              width={imgW}
              height={imgH}
              style={{
                maxWidth: `${mImgW}`,
                maxHeight: `${mImgH}`,
                width: "80vw",
              }}
            ></Image>
          </div>
        </div>
      )}
    </div>
  );
}

export function Label({ children }) {
  return (
    <div className="mr-4 my-6">
      <Text variant="md">
        <b>- {children}</b>
      </Text>
    </div>
  );
}

export function List({ el }) {
  return (
    <div className="mb-8">
      {el.map((el, key) => {
        return (
          <li key={key} className="px-5 py-2 my-2 mx-1 ">
            <Text variant="md">
              {key + 1}. {el}
            </Text>
          </li>
        );
      })}
    </div>
  );
}

export function TextBoxWithFormatting({ text }) {
  // WARNING: this element uses dangerouslySetInnerHTML to get formatting from the JSON translations file, use with caution!!!!
  return (
    <Text variant="md">
      <div dangerouslySetInnerHTML={{ __html: `${text}` }}></div>
    </Text>
  );
}

export function SectionMain({ children, title, subTitle }) {
  return (
    <div className="flex flex-col w-full">
      <Text variant="bigHeading">{title}</Text>
      <Spacer variant="sm"></Spacer>
      <Text variant="md">{subTitle}</Text>
      <div className="mt-20 ml-3 ">{children}</div>
    </div>
  );
}

export function Section({ children, title, subTitle }) {
  return (
    <div className="mb-12">
      <Text variant="lg">{title}</Text>
      <Spacer variant="sm"></Spacer>
      <Text variant="md">{subTitle}</Text>
      <div className="mt-4 ">{children}</div>
    </div>
  );
}

export function MainFmt({ children }) {
  return (
    <div className="flex w-full justify-center">
      <div className="px-4 w-[1200px] mt-24  ">{children}</div>
    </div>
  );
}

export function Lnk({ txtvar = "md", children, href }) {
  return (
    <Link
      className="border-b-[1px] border-[#FFFFFF00] hover:border-[#FFFFFFFF] inline-block"
      href={href}
      target="_blank"
    >
      <Text variant={txtvar}>
        <b>{children}</b>
      </Text>
    </Link>
  );
}

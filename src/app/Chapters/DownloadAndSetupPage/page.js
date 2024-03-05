"use client";
import React from "react";
import Text from "../../components/Text/Text";
import * as fmt from "../../components/FormattedText/Fmt";
import Skeleton from "../../components/Skeleton/Skeleton";
import SideBarElementExtended from "../../components/SideBar/SideBarElementExtended";

export default function DwAndSetup({}) {
  return (
    <div>
      <Text>Test</Text>
      <Skeleton topBarVariant="hamburger"></Skeleton>
    </div>
  );
}

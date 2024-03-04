"use client";
import React from "react";
import { MainFmt } from "../../components/FormattedText/Fmt";
import Text from "../../components/Text/Text";
import Skeleton from "../../components/Skeleton/Skeleton";

export default function DwAndSetup({}) {
  return (
    <MainFmt>
      <div>
        <Text>Test</Text>
      </div>
      <Skeleton topBarVariant="hamburger"></Skeleton>
    </MainFmt>
  );
}

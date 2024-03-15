import React from "react";
import Text from "../Text/Text";

export default function WIPBanner() {
  return (
    <div className="absolute left-20 hover:left-0 hover:right-0 right-48 max-w-[500px] md:right-96 z-[60] hover:bg-black hover:pb-20 hover:mt-16 overflow-hidden hover:overflow-visible border-white hover:border-[1px] hover:rounded-[15px] hover:px-2 hover:pt-2 transition-all">
      <Text variant="sm">
        <div className="md:mx-24 h-6">
          Attention: Gentoo.guide is still a WIP. The information, design and
          anything else related to the site is not final.
          <Text variant="xs">I'm too lazy to make this banner better :P</Text>
        </div>
      </Text>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import Text from "../Text/Text";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SiCodeberg } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Footer({}) {
  return (
    <div>
      <div className="w-full h-[100px] mt-12 flex items-center mx-1 px-8 border-t-[1px] border-[#FFFFFF09]">
        <div className="w-full grid grid-cols-2">
          <div>
            <Image
              src="/logo.png"
              width={200}
              height={100}
              className="w-24"
            ></Image>
          </div>
          <div className="flex justify-end items-center gap-4">
            <Text variant="xs">
              Gentoo.guide is fully FOSS! Check it out on:
            </Text>
            <Link
              href="https://codeberg.org/presi300/Gentoo.guide"
              target="_blank"
            >
              <div className="hover:scale-125 transition-transform">
                <Text>
                  <SiCodeberg size={25} />
                </Text>
              </div>
            </Link>
            <Link
              href="https://github.com/presi300/Gentoo.guide"
              target="_blank"
            >
              <div className="hover:scale-125 transition-transform">
                <Text>
                  <FaGithub size={25} />
                </Text>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

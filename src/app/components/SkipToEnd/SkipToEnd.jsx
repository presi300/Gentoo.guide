"use client";
import React from "react";
import Link from "next/link";
import Text from "../Text/Text";
import { VscFoldDown } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkipToEnd.css";

export default function SkipToEnd() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableElement = document.documentElement;
      const isScrolledToBottom =
        scrollableElement.scrollHeight - scrollableElement.scrollTop ===
        scrollableElement.clientHeight;
      setIsAtBottom(isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AnimatePresence>
      {!isAtBottom && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed bottom-12 right-12"
        >
          <Link href="#end">
            <div className="w-[60px] h-[60px]  rounded-full bg-[#AAA1CC] grid place-items-center hover:bg-[#8d84aa] transition-all">
              <Text variant="md">
                <div>
                  <VscFoldDown size={25} className="idk" />
                </div>
              </Text>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

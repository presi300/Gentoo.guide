"use client";
import React from "react";
import Link from "next/link";
import Text from "../Text/Text";
import { VscFoldDown } from "react-icons/vsc";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkipToEnd.css";

// Why does detecting the bottom of the page have to be a weird, shitty, garbage, unintuitive process that only works for some devices???
// Why do I have to make shitty workarounds like this, just because there is no standard way to detect the bottom of the page on both desktop and mobile?????

export function SkipToEnd({ shown = false }) {
  const [btm, btmHandler] = useState(undefined);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Look at me, am gebius
        entry.isIntersecting ? btmHandler(false) : btmHandler(true);
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <AnimatePresence>
        {btm && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-12 right-12 z-0"
            key={0}
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
      <div
        key={1}
        id="end"
        ref={targetRef}
        style={{
          height: shown ? "100px" : "0px",
          backgroundColor: shown ? "#FFFFFF" : "00000000",
        }}
      ></div>
    </div>
  );
}

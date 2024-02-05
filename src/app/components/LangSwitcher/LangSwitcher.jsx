"use client";
import LoadText from "./Loader.server";
import react, { useEffect } from "react";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const LangSwitcher = ({ langs }) => {
  const [state, stateHandler] = useState(false);
  const tl = undefined;
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      <button onClick={() => stateHandler(!state)}>
        <GrLanguage size={20}></GrLanguage>
      </button>
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ opacity: 0, y: -2 }}
            animate={{ opacity: 100, y: 5 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="absolute w-[150px]  left-[-63px] rounded-[15px] border-[#2A2738] border-opacity-30 border-2 bg-[#0A090E]"
          >
            {langs.map((langs, key) => {
              return (
                <button
                  key={key}
                  className="w-full px-3 py-2 rounded-[15px] border-opacity-30 hover:bg-[#23202e] transition-colors"
                  //A very complicated language switcher, indeed
                  onClick={() => {
                    {
                      LoadText(tl, key), router.refresh();
                    }
                  }}
                >
                  {langs}
                </button>
              );
              key++;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default LangSwitcher;

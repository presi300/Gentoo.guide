"use client";
import React from "react";
import { useRouter } from "next/navigation";

let tlL = null;
let varLang = null;
let defLang = 0;
let selLang = null;
let selID = localStorage.getItem("languageID");
const Reload = () => {
  const router = useRouter();
  router.refresh();
};

export default function LoadText(tl, langID) {
  if (selID == (undefined || null)) {
    localStorage.setItem("languageID", defLang);
    console.log(selID);
    Reload();
  }
  // 1. Language loaded initially (tl = lang, langID = undefined)
  if (tl != (undefined || null) && langID == (undefined || null)) {
    // Save data to the function to avoid loading it multiple times
    tlL = tl;
    varLang = [tl.lang.enUS, tl.lang.bg, tl.lang.de];
    selLang = null;
    console.log("Language data loaded successfully!");
    console.log("selID", selID);
    return varLang[selID];
  }
  // Language is already loaded, just switching (tl = undefined, langID is set by LangSwitcher.jsx)
  else if (tl == (undefined || null) && langID != (undefined || null)) {
    localStorage.setItem("languageID", langID);

    selID = localStorage.getItem("languageID");
    console.log(selID);
    console.log(langID);
    selLang = varLang[langID];
    console.log("Language changed to: ", selLang);
    return selLang;
  }
  // Language is already loaded and has been passed to a variable
  else if (
    tl == (undefined || null) &&
    langID == (undefined || null) &&
    selID != (undefined || null)
  ) {
    selLang = varLang[selID];
    console.log("Read data from cookie successfully!");
    console.log("selID: ", selID);
    return selLang;
  }
  // Well, shit
  else {
    console.log("Language data failed to load, uuuh... oops?");
    console.log("tl: ", tl);
    console.log("selID: ", selID);
    console.log("langID: ", langID);
    console.log("tlL: ", tlL);
    return null;
  }
}

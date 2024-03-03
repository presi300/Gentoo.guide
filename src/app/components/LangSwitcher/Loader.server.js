import React from "react";
import { useRouter } from "next/navigation";

let tlL = null;
let varLang = null;
let defLang = 0;
let selLang = null;
let cacheLang = null;

let selID = "";

export default async function LoadText(tl, langID) {
  selID = localStorage.getItem("languageID");
  // I am a gebius, prevent returning undefined on 1st load
  if (selID == (undefined || null)) {
    localStorage.setItem("languageID", defLang);
    LoadText(tl, defLang);
  }
  // Language loaded initially (tl = lang, langID = undefined)
  if (tl != (undefined || null) && langID == (undefined || null)) {
    // Save data to the function to avoid loading it multiple times
    tlL = tl;
    varLang = [tl.lang.enUS, tl.lang.bg];
    selLang = null;
    console.log("worky");
    cacheLang = varLang[selID];
    return varLang[selID];
  }
  // Language is already loaded, just switching (tl = undefined, langID is set by LangSwitcher.jsx)
  else if (tl == (undefined || null) && langID != (undefined || null)) {
    localStorage.setItem("languageID", langID);
    selID = localStorage.getItem("languageID");
    selLang = varLang[langID];
    cacheLang = selLang;
    return selLang;
  }
  // Language is already loaded and has been passed to a variable
  else if (
    tl == (undefined || null) &&
    langID == (undefined || null) &&
    selID != (undefined || null)
  ) {
    selLang = varLang[selID];
    cacheLang = selLang;
    return selLang;
  }
  // Well, shit
  else {
    return null;
  }
}

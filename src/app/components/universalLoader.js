"use client";
import tl from "./universalTranslations.json";
import LoadText from "./LangSwitcher/Loader.server";
import { useState, useEffect } from "react";

// Calls the language loader for static UI components (things, not controlled from the page).

export function UITextTl() {
  const [lmao, lmaoHandler] = useState(tl.lang.enUS);

  useEffect(() => {
    window.onload = LoadText(tl).then((Content) => lmaoHandler(Content));
  });

  return lmao;
}

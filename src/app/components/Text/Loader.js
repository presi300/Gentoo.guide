"use client";
export default function LoadText(langID, tl) {
  // All of the available languages in the translations.JSON files

  const varLang = [tl.lang.enUS, tl.lang.bg];

  // Set default language to English
  const defLang = varLang[0];

  // Set the ID of the desired language as the currently selected one
  let sLang = varLang[langID];

  return sLang;
}

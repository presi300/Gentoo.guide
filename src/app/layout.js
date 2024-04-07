import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Gentoo.guide",
  description: "Gentoo Linux Simplified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className="scroll-smooth ">
      <body className={`${comfortaa.className} overflow-x-hidden `}>
        {children}
      </body>
    </html>
  );
}

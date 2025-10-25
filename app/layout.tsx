import type { Metadata } from "next";
import { Rubik, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const defaultFontRubik = Rubik({
    variable: "--font-default-rubik",
    subsets: ["latin"],
});

const highlightFontIBM = IBM_Plex_Mono({
    weight: "200",
    variable: "--font-highlight-ibm",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Teschnische Dienstleistungen in Delmenhorst",
    description: "Informationen zum Angebot zu Technischen Dienstleistungen und Support in Delmenhorst aus erster Hand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${defaultFontRubik.variable} ${highlightFontIBM.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

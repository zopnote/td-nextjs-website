/*
Copyright (c) 2025, Lenny Siebert

Permission is hereby granted to use, copy, modify,
and distribute this program for personal or commercial purposes,
provided that only generic content is used. Use of any personal, business,
or proprietary data belonging to the licensor is strictly prohibited.

Protected content includes, but is not limited to:
- Personal or business-related images, texts, offers, or prices
- Forms, databases, or structured data
- Source code containing personal or business information, including email addresses,
API endpoints, or internal structures

The term “developer” refers exclusively to the licensor,
the original creator of this program, or the copyright holder.

This backend is published primarily for educational, portfolio, and demonstration purposes, including:
- Allowing others to understand the technologies used
- Permitting adoption of generic structural or functional patterns
- Showcasing the project as part of the developer’s portfolio

The general structure, methodology, and generic functions of the program may be used,
adapted, or imitated. Any use involving personal or business-specific data of the licensor is strictly forbidden.

THE PROGRAM IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND.
THE LICENSOR SHALL NOT BE LIABLE FOR ANY DAMAGES OR LEGAL CLAIMS ARISING FROM USE,
 PARTICULARLY FROM UNAUTHORIZED USE OF PERSONAL OR BUSINESS DATA.

*/

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
    title: "Technikservice Siebert in Delmenhorst",
    description: "Angebot zu technischen Dienstleistungen und Support vor Ort in Delmenhorst aus erster Hand für günstige Preise.",
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

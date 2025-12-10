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

'use client';

import Hero from "@/app/landing/components/hero";
import Discount from "@/app/landing/components/service";
import Footer from "@/lib/footer";

import {useWindowAttributes} from "@/hooks/window_attributes";


export default function Landing() {
    const {width: windowWidth, height: windowHeight} = useWindowAttributes();
    return (
        <div>
            <h1 style={{
                maxHeight: "0px",
                color: "white"
            }}>PC Hilfe PC Support Handy Hilfe WLAN Technische Dienste Dienstleistungen Lenny Siebert in Delmenhorst</h1>
            <div style={{
                maxWidth: "1200px",
                alignSelf: "center",
                justifySelf: "center"
            }}>
                <Hero
                    height={
                        windowWidth > 850 ? (windowHeight > 600 ? "100vh" :
                                windowWidth < 500 ?
                                    "860px" : "650px")
                            : (windowWidth < 620 ?
                                windowWidth < 460 ?
                                    "960px" : "860px"
                                : "700px")}

                    invertedScroll={true} />
            </div>
            <Discount/>
            <Footer/>
        </div>
    );
}

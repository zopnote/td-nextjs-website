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
import TabBar from "@/lib/tabbar";
import Footer from "@/lib/footer";
import Link from "next/link";
import {CheckmarkFilled} from "@carbon/icons-react";
import {useWindowAttributes} from "@/hooks/window_attributes";
function createServiceList(items: string[]) {
    return items.map((item, index) => (
        <div
            key={index}
            style={{
                boxSizing: "border-box",
                width: "100%",
            }}
        >
            <div
                className="flex items-center justify-start"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255,255,255,0.09)",
                    padding: "0.5rem",
                    borderRadius: 8,
                    color: "#000000",
                    width: "100%",
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    fontWeight: 400,
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CheckmarkFilled color={"#0070f3"} size={24} />
                </div>
                <span>{item}</span>
            </div>
        </div>
    ));
}
export default function Prices() {
    const {isMobile} = useWindowAttributes(770);
    return (
        <div>
            <TabBar></TabBar>

            <div style={{
                height: "10vh"
            }}></div>
            <div style={{
                maxWidth: "1600px",
                display: "flex",
                flexDirection: "column",
                justifySelf: "center",
                alignSelf: "center",
            }}>
                <div className={"title"} style={{
                    width: "80%",
                    alignSelf: "center",
                    justifySelf: "center"
                }}>Angebote & Preise</div>
                <div style={{height: "20px"}}></div>
                <div className={"text"} style={{
                    width: "80%",
                    alignSelf: "center",
                    justifySelf: "center"
                }}>Es gestaltet sich schwer transparent Angebote zu stellen, die fair für den Kunden und mich sind. Daher möchte ich hier einmal benennen, dass mein Ziel ist, nebenberuflich etwas dazu zu verdienen und ich meine Preise passend angehe. Sie können von mir erwarten, dass ich für ein Problem einen angemessenen und günstigen Preis stelle.</div>
                <div className={"flex flex-col md:flex-row justify-center items-center gap-8 mt-16 px-4"}>
                    <div className="w-full md:w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2">Beratungsservice</h2>
                        <p className="text-gray-500 mb-4">Unterstützung & Beratung</p>
                        <div className="text-4xl font-bold mb-4">
                            Ab €25 <span className="text-lg text-gray-500">inkl. MwSt</span>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li>Schnellhilfe</li>
                            <li>Wartung und Installation</li>
                            <li>Und mehr...</li>
                        </ul>
                        <Link href={"/#contact"} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-colors" >
                            Jetzt kontaktieren
                        </Link>
                    </div>
                    {!isMobile ? <div className="w-full md:w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow" style={{
                        width: "50%"
                    }}>
                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(220px, max-content))",
                                justifyContent: "center",
                                alignItems: "start",
                                width: "100%",
                            }}
                        >
                            {createServiceList([
                                "Beratungen",
                                "Softwareinstallation",
                                "Einfache Problembehebung",
                                "iPhone & Android",
                                "PC & Laptop",
                                "Internet, WLAN & Mobilfunk",
                                "Virusschutz",
                                "Diagnostizierung"
                            ])}
                        </div>
                    </div> : <></>}
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 px-4">
                    {!isMobile ? <div className="w-full md:w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow" style={{
                        width: "50%"
                    }}>
                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(220px, max-content))",
                                justifyContent: "center",
                                alignItems: "start",
                                width: "100%",
                            }}
                        >
                            {createServiceList([
                                "Reparatur¹ & Wartung",
                                "Komplexe Problembehebung",
                                "Einrichtung von Geräten",
                                "Fernseher & Drucker",
                                "Netzwerksysteme",
                                "Problembehebung an Servern",
                                "Alle Betriebssysteme",
                                "Jailbreaks von Geräten",
                                "Virusentfernung & Schutz",
                                "Schulung und Unterstützung"
                            ])}
                        </div>
                    </div> : <></>}
                    <div className="w-full md:w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2">Weiterführender Service</h2>
                        <p className="text-gray-500 mb-4">Inkl. Beratungsservice</p>
                        <div className="text-4xl font-bold mb-4">
                            Ab €45 <span className="text-lg text-gray-500"> inkl. MwSt.</span>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li>Komplexe Sachverhalte</li>
                            <li>Komplexe Problembehebungen</li>
                            <li>Und mehr...</li>
                        </ul>
                        <Link href={"/#contact"} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-colors" >
                            Jetzt kontaktieren
                        </Link>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16 px-4">
                    <div className="w-full md:w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-semibold mb-2">Software Entwicklung</h2>
                        <p className="text-gray-500 mb-4">Server, Web, Desktop & Mobil</p>
                        <div className="text-4xl font-bold mb-4">
                            Ab €119 <span className="text-lg text-gray-500">inkl. MwSt</span>
                        </div>
                        <ul className="text-gray-600 mb-6 space-y-2">
                            <li>CLIs, HTTP-Backends & Server</li>
                            <li>Cross-platform Apps</li>
                            <li>Und weiteres...</li>
                        </ul>
                        <Link href={"custom-made/"} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition-colors" >
                            Mehr erfahren
                        </Link>
                    </div>
                    {!isMobile ? <div className="w-full md:w-80 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition-shadow" style={{
                        width: "50%"
                    }}>
                        <div
                            style={{
                                display: "grid",
                                gap: "1rem",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(220px, max-content))",
                                justifyContent: "center",
                                alignItems: "start",
                                width: "100%",
                            }}
                        >
                            {createServiceList([
                                "Mobilanwendungen",
                                "CLI applications",
                                "Front- & Backend",
                                "Cross-platform apps",
                                "Desktop apps",
                                "Native Anwendungen",
                                "Webseiten & Webapps",
                                "Game-Mods"
                            ])}
                        </div>
                    </div> : <></>}
                </div>
            </div>
            <div style={{ height: "100px" }}></div>
            <Footer></Footer>
        </div>
    );
}

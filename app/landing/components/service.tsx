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

import {CheckmarkFilled, Laptop} from "@carbon/icons-react";
import {useEffect, useState} from "react";
import OpeningTimes from "@/app/landing/components/opening_times";
import Contact from "@/app/landing/components/contact";
import Link from "next/link";




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
                    background: "rgba(0,0,0,0.09)",
                    padding: "0.5rem",
                    borderRadius: 8,
                    color: "#fff",
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

export default function Service() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 820);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div
            id="discount"
            className="w-full flex flex-col"
            style={{ backgroundColor: "#000", height: "fit-content" }}
        >
            <div
                style={{
                    alignSelf: "center",
                    display: "flex",
                    width: "80vw",
                    maxWidth: "1200px",
                    justifySelf: "center",
                    height: "fit-content",
                    flexDirection: "column",
                    backgroundColor: "rgb(0,0,0)",
                    padding: "1rem",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ height: "7vh" }} />
                <div
                    className={"title flex flex-row"}
                    style={{ color: "#fff", alignSelf: isMobile ? "center" : "start" }}
                >
                    <Laptop size={38} />
                    <div style={{ width: 12 }} />
                    Services
                </div>
                <div style={{ height: "3vh" }} />
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
                        "Internet, WLAN & Mobilfunk",
                        "Netzwerkkonfiguration",
                        "Fernseher & Drucker",
                        "Alle Betriebssysteme",
                        "Desktop & Laptop",
                        "iPhone & Android",
                        "Web- & Appentwicklung",
                        "PC Hardware & Software",
                        "Installation von Software",
                        "Einrichtung von Geräten",
                        "Kaufberatung",
                        "Virusentfernung & Schutz",
                        "Reparatur¹ & Wartung",
                        "PC-Zusammenbau",
                    ])}
                </div>
                <div style={{ height: "6vh" }} />
                <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                }}>
                    <div className={"flex-col flex"} style={{
                        width: "100%",
                    }}>
                            <span className={"text"} style={{
                                color: "#ffffff",
                            }}>
                                <strong>Bereits ab 25 EUR inkl. MwSt³</strong>
                            </span>
                        <div/>
                        <span className={"text"} style={{fontSize: "smaller", color: "#ffffff"}}>
                                Bei großen Anfragen ist ein Kostenvoranschlag möglich.
                            </span>
                    </div>
                    <div style={isMobile ? {height: "30px"} : {width: "10vw"}}></div>
                    <Link href={"prices/"}>
                        <div className={"hover:bg-black flex flex-row"} style={{
                            backgroundColor: "#0070f3",
                            color: "#ffffff",
                            width: "270px",
                            height: "50px",
                            fontSize: "1.5rem",
                            fontWeight: "400",
                            alignSelf: "start",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}>
                            <div style={{width: "11%"}}></div>
                            <div style={{
                                padding: "6px",
                                width: "260px",
                            }}>
                                Preise betrachten
                            </div>
                        </div>
                    </Link>
                </div>
                <div style={{ height: "20vh" }} />
                <div className={isMobile ? "flex-col flex" : "flex-row flex"} style={{
                    justifyContent: "space-between"
                }}>
                    <OpeningTimes/>
                    <div style={isMobile ? { height: "9vh" } : { width: "5vw"}} />
                    <Contact/>

                </div>
            </div>

        </div>
    );
}

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

import {useEffect, useState} from "react";
import {Time} from "@carbon/icons-react";

export default function OpeningTimes() {
    type OpeningHour = {
        day: string;
        justClosed: boolean;
        hoursStart: number;
        minutesStart: number;
        hoursEnd: number;
        minutesEnd: number;
    };

    const openingHours: OpeningHour[] = [
        { day: "Montag", hoursStart: 15, minutesStart: 30, hoursEnd: 20, minutesEnd: 0, justClosed: false},
        { day: "Dienstag", hoursStart: 13, minutesStart: 50, hoursEnd: 20, minutesEnd: 0, justClosed: false},
        { day: "Mittwoch", hoursStart: 0, minutesStart: 0, hoursEnd: 0, minutesEnd: 0, justClosed: true },
        { day: "Donnerstag", hoursStart: 15, minutesStart: 50, hoursEnd: 20, minutesEnd: 0, justClosed: false},
        { day: "Freitag", hoursStart: 13, minutesStart: 30, hoursEnd: 20, minutesEnd: 0, justClosed: false},
        { day: "Samstag", hoursStart: 8, minutesStart: 0, hoursEnd: 20, minutesEnd: 0, justClosed: false},
        { day: "Sonntag", hoursStart: 8, minutesStart: 0, hoursEnd: 18, minutesEnd: 0, justClosed: false},
    ];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 820);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className={"flex flex-col"} style={{
            alignSelf: isMobile ? "center": "start",
            width: isMobile ? "60vw" : "35vw"
        }}>
            <div
                className="title flex flex-row"
                style={{ color: "#fff",
                    alignSelf: isMobile ? "center": "start", }}
            >
                <Time size={38} />
                <div style={{ width: 12 }} />
                Öffnungszeiten²
            </div>
            <div style={{ height: "3vh" }} />
            {openingHours.map((value) => (
                <div key={value.day} style={{
                    width: "intrinsic",
                    height: "fit-content",
                    flexDirection: "row",
                    alignContent: "space-between",
                    justifyContent: "space-between",
                    display: "flex"
                }}>

                    <div style={{
                        width: "fit-content",
                        height: "fit-content",
                        color: "white",
                        border: "white",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderRadius: "10px",
                        display: "flex",
                        padding: "0.3rem",
                        flexDirection: "row"
                    }}>{value.day}</div>
                    <div style={{
                        width: "fit-content",
                        height: "fit-content",
                        color: "white",
                        border: "white",
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderRadius: "10px",
                        display: "flex",
                        padding: "0.5rem",
                        flexDirection: "row"
                    }}>{value.justClosed ? "Geschlossen" : value.hoursStart + " : "}{value.justClosed ? "" : value.minutesStart + " - "}{value.justClosed ? "" : value.hoursEnd + " : "}{value.justClosed ? "" : value.minutesEnd}</div>

                </div>
            ))}
        </div>



    );
}
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

import {ReactElement, useEffect, useState} from "react";
import {Email, MobileAudio, PhoneFilled, UserFeedback} from "@carbon/icons-react";

export default function Contact() {
    type Entry = {
        icon: ReactElement;
        space: number;
        text: string;
        href: string;
    };

    const entries: Entry[] = [
        {icon: <PhoneFilled size={24}/>, space: 4, text: "Festnetz |04221 2922185", href: "tel:042212922185"},
        {icon: <MobileAudio size={24}/>, space: 4, text: "Mobil |01590 6143955", href: "tel:015906143955"},
        {
            icon: <Email size={24}/>,
            space: 4,
            text: "Mail |lennysiebert@tdls-del.de",
            href: "mailto:lennysiebert@tdls-del.de"
        },
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 820);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div id={"contact"} className={"flex flex-col"} style={{
            alignSelf: isMobile ? "center" : "start",
            width: isMobile ? "60vw" : "35vw"
        }}>
            <div
                className="title flex flex-row"
                style={{
                    color: "#fff",
                    alignSelf: isMobile ? "center" : "start",
                }}
            >
                <UserFeedback size={38}/>
                <div style={{width: 12}}/>
                Kontakt
            </div>
            <div style={{
                height: "70px"
            }}></div>
            {entries.map((value) => (
                <div key={entries.indexOf(value)} style={{
                    color: "white",
                    padding: "0.5rem",
                    display: "flex",
                    flexDirection: "row"
                }}>
                    {value.icon}
                    <div style={{
                        width: "7px"
                    }}></div>
                    {value.text.split("|")[0]}
                    &nbsp;-&nbsp;
                    <a href={value.href} style={{
                        color: "#8babcc",
                        borderBottom: "solid 0.5px"
                    }}>
                        {value.text.split("|")[1]}</a>
                </div>
            ))}
        </div>
    );
}
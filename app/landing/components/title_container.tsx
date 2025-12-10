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

import TabBar from "@/lib/tabbar";
import Image from "next/image";
import logo from "@/assets/logo.png";
import {ReactTyped} from "react-typed";
import {useEffect, useState} from "react";
import {useWindowAttributes} from "@/hooks/window_attributes";

interface TitleContainerProperties {
    children?: React.ReactNode;
    height?: string;
}
export default function TitleContainer({height, children}: TitleContainerProperties) {
    const {isMobile: isMobile} = useWindowAttributes(620);


    const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");
    useEffect(() => {
        const updateFlexDirection = () => {
            setFlexDirection(window.innerWidth < 768 ? "column" : "row");
        };

        updateFlexDirection();
        window.addEventListener("resize", updateFlexDirection);

        return () => {
            window.removeEventListener("resize", updateFlexDirection);
        };
    }, []);
    return (

        <div style={{display: "flex", flexDirection: "column",
            justifyContent: "space-around",
        }}>
            <header className={"h-30 p-4"} style={{
                display: "flex",
                flexDirection: flexDirection,
                alignItems: "center",
                width: "100%",
                height: "fit-content",
                justifyContent: "space-around"
            }}>
                <Image
                    src={logo}
                    alt="Logo"
                    width={298}
                    height={298}
                    priority={true}
                />

            </header>

            <hr style={{width: "50%", border: "none", height: isMobile ? "0vh" : "5vh"}}/>
            <div style={{
                alignSelf: "center",
                justifySelf: "center",
                width: "80%",

            }}>
                <div className={"title"} style={{
                    alignSelf:"start",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    padding: 15
                }}>
                    Probleme mit dem{" "}<ReactTyped
                    strings={[
                        "PC?",
                        "Handy?",
                        "Fernseher?",
                        "Router?",
                        "WLAN?",
                        "Drucker?",
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    backDelay={1500}
                    loop
                />
                </div>
                <div className={"title"} style={{
                    alignSelf:"start",
                    padding: 15
                }}>
                    Schnelle Hilfe und günstiger Service! Sparen Sie sich Zeit und Geld.
                </div>
            </div>

            <hr className={"border-primary"} style={{width: "50vw", border: "none", height: "5vw"}}/>
            <div className={"title-container"} style={{
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf:"center",
                alignSelf:"center",
                width: '80%',
                margin: 0,
                padding: 0}}>
                <TabBar/>
                {children}
            </div>
        </div>
    );
}
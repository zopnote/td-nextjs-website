"use client";

import Link from "next/link";
import {CurrencyEuro, Catalog, ArrayObjects, ToolKit} from "@carbon/icons-react";
import {useEffect, useState} from "react";

const tabs = [
    { label: " Zum Serviceangebot", href: "#discount", icon: <Catalog size={28}/> },
    { label: " Maßgeschneiderte PCs", href: "#pc", icon: <ToolKit size={28}/> },
    { label: " Web- & Appentwicklung", href: "#dev", icon: <ArrayObjects size={28}/> },
    { label: " Preisliste", href: "#explore", icon: <CurrencyEuro size={28}/> },
];


export default function TabBar() {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [isSmallest, setIsSmallest] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsSmallest(window.innerWidth < 600);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isSmaller, setIsSmaller] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsSmaller(window.innerWidth < 1000);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-full w-full p-2">
            {isSmaller ? (
                // Mobile: 2x2 Grid
                <div className={isSmallest ? "flex flex-col" : "grid grid-cols-2 gap-2"}>
                    {tabs.map((tab) => (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`flex flex-col items-center justify-center border-0 p-4 rounded transition-colors duration-200`}
                            onMouseEnter={() => setHoveredTab(tab.href)}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <div className="flex flex-row items-center justify-center" style={{
                                fontWeight: "400",
                                width: "100%",
                                borderRadius: "10px",
                                color: hoveredTab === tab.href ? "#616161" : "black",
                            }}>
                                <div style={{
                                    width: isSmallest ? "0vw" : "3vw",
                                }}></div>
                                <div style={{
                                    width: "28px",
                                    height: "28px",
                                }}>
                                    {tab.icon}
                                </div>
                                <div style={{
                                    width: "3vw",
                                }}></div>
                                {tab.label}

                                <div style={{
                                    width: isSmallest ? "5vw" : "0vw",
                                }}></div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                // Desktop: Row
                <div className="flex justify-around">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`flex flex-col items-center justify-center border-0 p-4 rounded transition-colors duration-200`}
                            onMouseEnter={() => setHoveredTab(tab.href)}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <div className="flex flex-row items-center justify-center" style={{
                                fontWeight: "400",
                                color: hoveredTab === tab.href ? "#717171" : "black",
                            }}>

                               {tab.icon}<div style={{
                                   width: "10px",
                            }}></div>{tab.label}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
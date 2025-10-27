"use client";

import Link from "next/link";
import {CurrencyEuro, Catalog, ArrayObjects, ToolKit} from "@carbon/icons-react";
import {useEffect, useState} from "react";

const tabs = [
    { label: " Zum Angebot", href: "#discount", icon: <Catalog size={28}/> },
    { label: " Über maßgeschneiderte PCs", href: "#pc", icon: <ToolKit size={28}/> },
    { label: " Entwicklung von Websites und Apps", href: "#settings", icon: <ArrayObjects size={28}/> },
    { label: " Preisliste", href: "#explore", icon: <CurrencyEuro size={28}/> },
];


export default function TabBar() {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-full w-full p-2">
            {isMobile ? (
                // Mobile: 2x2 Grid
                <div className="grid grid-cols-2 gap-2">
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
                                }}></div>
                                {tab.label}</div>
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
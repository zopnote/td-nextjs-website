import React, {useEffect, useRef, useState} from "react";
import {Checkmark, CheckmarkFilled, IntentRequestActive, Laptop, UserFeedback} from "@carbon/icons-react";

function createServiceList(items: string[]) {
    return items.map((item, index) => (
        <div key={index} className={"flex-row flex"} style={{
            height: "3.5rem",
            fontSize: "1.5rem",
            fontWeight: "400",
            width: "100%",
            lineHeight: "1.5rem",
            color: "#111",
            alignItems: "center",
            justifyContent: "start",
        }}>
            <div style={{
                width: "2.5rem",
                height: "2.5rem",
                alignSelf: "end",
            }}><Checkmark size={32} /></div>
            {item}
        </div>
    ));
}


export default function DiscountWindow() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div id="discount" className={"w-full h-full align-middle flex flex-col"}>
                <div style={{ width: "70%", alignSelf: "center", flexDirection: "column", flex: "none" }}>

                    <div style={{height: "10vh"}}/>
                    <div className="title flex-row flex">
                        <Laptop size={38} />
                        <div style={{width: "12px"}}/>
                        Serviceangebot
                    </div>
                    <div style={{ height: "10px" }}></div>
                    <div style={{ display: "flex", gap: "2rem", flexDirection: isMobile ? "column" : "row" }}>
                        <div style={{ flex: 1 }}>
                            {createServiceList([
                                "Internet, WLAN & Mobilfunk",
                                "Netzwerkkonfiguration",
                                "Fernseher & Drucker",
                                "Alle Betriebssysteme",
                                "Desktop & Laptop",
                                "iPhone & Android",
                                "Web- & Appentwicklung"
                            ])}
                        </div>
                        <div style={{ flex: 1 }}>
                            {createServiceList([
                                "PC Hardware & Software",
                                "Installation von Software",
                                "Kaufberatung",
                                "Virusentfernung & Schutz",
                                "Installation",
                                "Reperatur & Wartung",
                                "PC-Zusammenbau",
                            ])}
                        </div>
                    </div>
                </div>

        </div>
    );
}

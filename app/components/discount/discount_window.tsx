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

    const parallaxRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLElement | null>(null);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const parallaxFactor = -0.25; // negatives Vorzeichen: Inhalt bewegt sich entgegengesetzt (sanfter)
        let ticking = false;

        const update = () => {
            if (!parallaxRef.current || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            // Mittelpunkt des Containers relativ zum Viewport
            const containerCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            // Distanz in px: wie weit ist der Container-Mittelpunkt vom Viewport-Mittelpunkt entfernt
            const distanceFromCenter = containerCenter - viewportCenter;

            // translateY in px, skaliert durch factor
            const translateY = distanceFromCenter * -parallaxFactor;

            parallaxRef.current.style.transform = `translateY(${translateY}px)`;
            ticking = false;
            rafId.current = null;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                rafId.current = window.requestAnimationFrame(update);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // initial call (wichtig für den Zustand direkt nach Mount)
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            style={{
                height: isMobile ? "60rem" : "50rem",
                position: "relative",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.05)",
            }}
        >
            <div
                ref={parallaxRef}
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    willChange: "transform",
                    color: "#111",
                    transition: "transform 0.05s linear"
                }}
            >
                <div id="discount" style={{ width: "70%" }}>
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
        </section>
    );
}

import Map from "@/app/components/map/map_wrapper";
import React, {useEffect, useRef} from "react";
import Info from "@/app/components/map/info";

export default function MapWindow() {


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
                height:  "70rem",
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
                <div style={{height: "60vh", width: "100%"}} >
                    <Map/>
                </div>
                <div style={{height: "5vh" }}/>
                <Info/>
            </div>
        </section>
    );
}
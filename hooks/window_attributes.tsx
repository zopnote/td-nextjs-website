'use client';
import { useState, useEffect } from "react";

export function useWindowAttributes(mobileMaxWidth: number = 850) {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = size.width <= mobileMaxWidth;

    return { ...size, isMobile };
}
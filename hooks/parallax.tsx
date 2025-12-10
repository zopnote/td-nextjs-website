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

import React, { useEffect, useRef } from "react";

/**
 * Adds a parallax scroll effect to an element.
 * @param containerRef Ref to the surrounding container element (e.g., section)
 * @param targetRef Ref to the moved element (e.g., div with transform)
 * @param factor Controls the parallax intensity. Negative = opposite direction.
 */
export function useParallaxScroll(
    containerRef: React.RefObject<HTMLElement | null>,
    targetRef: React.RefObject<HTMLElement | null>,
    factor: number = -0.25
) {
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        let ticking = false;

        const update = () => {
            if (!containerRef.current || !targetRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const containerCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distanceFromCenter = containerCenter - viewportCenter;

            const translateY = distanceFromCenter * -factor;
            targetRef.current.style.transform = `translateY(${translateY}px)`;

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
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafId.current != null) window.cancelAnimationFrame(rafId.current);
        };
    }, [containerRef, targetRef, factor]);
}

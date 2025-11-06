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

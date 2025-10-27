"use client";

import React, { useEffect, useRef } from "react";
import "./parallax.css";

interface HeroProperties {
  content?: React.ReactNode;
  height?: string;
  invertedScroll?: boolean;
}

function Parallax({ content, height = "60vh", invertedScroll = false }: HeroProperties) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const parallaxSpeed = invertedScroll ? -0.5 : 0.5;
        parallaxRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax-container" style={{ height }}>
      <div ref={parallaxRef} className="parallax-content">
          {content}
      </div>
    </section>
  );
}

export default Parallax;
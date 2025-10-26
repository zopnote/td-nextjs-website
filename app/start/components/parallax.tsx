"use client";

import React, { useEffect, useRef } from "react";
import "./parallax.css";

interface HeroProperties {
  content?: React.ReactNode;
  height?: string;
}

function Parallax({ content, height = "60vh" }: HeroProperties) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
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
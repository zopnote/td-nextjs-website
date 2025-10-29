"use client";

import React, { useEffect, useRef } from "react";
import "./hero.css";
import TitleContainer from "@/app/components/start/title_container";

interface HeroProperties {
  height?: string;
  invertedScroll?: boolean;
}

function Hero({ height = "60vh", invertedScroll = false }: HeroProperties) {
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
    <section className="hero-container" style={{ height: height }}>
      <div ref={parallaxRef} className="hero-content">
          <TitleContainer/>
      </div>
    </section>
  );
}

export default Hero;
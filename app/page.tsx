'use client';
 import Hero from "@/app/components/start/hero";
import DiscountWindow from "@/app/components/discount/discount_window";
import MapWindow from "@/app/components/map/map_window";
import {useEffect, useState} from "react";
import DevelopmentWindow from "@/app/components/development/development_window";


export default function Home() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 786);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [isHigh, setIsHigh] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsHigh(isMobile ? window.innerHeight > 800 : window.innerHeight > 720);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
      <>
          <Hero
              height={isHigh ? "100vh" : isMobile ? "800px" : "720px"}
              invertedScroll={true} />
          <DiscountWindow/>
          <div style={{height: "10vh"}}></div>
          <MapWindow/>
          <div style={{height: "10vh"}}></div>
          <DevelopmentWindow/>
      </>
  );
}

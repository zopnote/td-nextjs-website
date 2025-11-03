'use client';
 import Hero from "@/app/components/start/hero";
import DiscountWindow from "@/app/components/discount/discount_window";
import MapWindow from "@/app/components/map/map_window";
import {useEffect, useState} from "react";
import DevelopmentWindow from "@/app/components/development/development_window";


export default function Home() {

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
      <>
          <Hero
              height={windowWidth > 850 ? (windowHeight > 600 ? "100vh" : windowWidth < 500 ? "860px" : "650px") : (windowWidth < 500 ? "860px" : "780px")}
              invertedScroll={true} />
          <DiscountWindow/>
          <div style={{height: "10vh"}}></div>
          <MapWindow/>
          <div style={{height: "10vh"}}></div>
          <DevelopmentWindow/>
      </>
  );
}

'use client';
import TitleWindow from "@/app/components/start/title_container";
import Parallax from "@/app/components/parallax";
import DiscountWindow from "@/app/components/discount/discount_window";
import MapWindow from "@/app/components/map/map_window";
import {useEffect, useState} from "react";


export default function Home() {

    const [isHigh, setIsHigh] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsHigh(window.innerHeight > 800);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
      <>
          <Parallax
              height={isHigh ? "100vh" : "800px"}
              invertedScroll={true} content={<TitleWindow/>} />
          <MapWindow/>
          <DiscountWindow/>
          <div>
              <p className={"title p-3"}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                  Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                  et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                  duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet.</p>
          </div>
      </>
  );
}

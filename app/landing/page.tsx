'use client';

import Hero from "@/app/landing/components/hero";
import Discount from "@/app/landing/components/service";
import Footer from "@/lib/footer";

import {useWindowAttributes} from "@/hooks/window_attributes";


export default function Landing() {
    const {width: windowWidth, height: windowHeight} = useWindowAttributes();
    return (
        <div>
            <h1 style={{
                maxHeight: "0px",
                color: "white"
            }}>PC Hilfe PC Support Handy Hilfe WLAN Technische Dienste Dienstleistungen Lenny Siebert in Delmenhorst</h1>
            <Hero
                height={
                    windowWidth > 850 ? (windowHeight > 600 ? "100vh" :
                            windowWidth < 500 ?
                                "860px" : "650px")
                        : (windowWidth < 620 ?
                            windowWidth < 460 ?
                                "960px" : "860px"
                            : "700px")}

                invertedScroll={true} />
            <Discount/>
            <Footer/>
        </div>
    );
}

import Map from "@/app/components/map/map_wrapper";
import React from "react";
import Info from "@/app/components/map/info";

export default function MapWindow() {
    return (
        <div className={"w-full h-full align-middle flex flex-col"}>
            <div style={{height: "50vh"}} >
                <Map/>
            </div>
            <Info/>
        </div>
    );
}
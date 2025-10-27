import Map from "@/app/components/map/map_wrapper";
import React from "react";
import Info from "@/app/components/map/info";

export default function MapWindow() {
    return (
        <div id={"map"} className={"map-window-container"}>
            <div style={{height: "60vh"}} >
                <Map/>
            </div>
            <Info/>
        </div>
    );
}
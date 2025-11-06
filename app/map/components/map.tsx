'use client';
import React, { useRef } from "react";
import styles from "@/app/map/components/map.module.css";
import { useParallaxScroll } from "@/hooks/parallax";
import dynamic from "next/dynamic";
import 'leaflet/dist/leaflet.css';
import {Checkmark, CheckmarkFilled} from "@carbon/icons-react";
import {useWindowAttributes} from "@/hooks/window_attributes";

const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Circle = dynamic(() => import("react-leaflet").then(mod => mod.Circle), { ssr: false });

const LeafletMap = dynamic(() => Promise.resolve(LeafletMapComponent), {
    ssr: false,
    loading: () => <div className={"flex-col flex align-middle items-center"} style={{ height: "20vh"}}><a className={"title p-13"}>Karte wird geladen...</a></div>,
});

function LeafletMapComponent() {
    const {isMobile} = useWindowAttributes(730);
    const delmenhorstCenter: [number, number] = [53.0492, 8.6151];
    const serviceRadius = 5800;

    return (
        <div className="w-full align-middle flex flex-col">
            <div id="map" style={{ height: "60vh" }}>
                <MapContainer
                    zoomControl={true}
                    attributionControl={false}
                    center={delmenhorstCenter}
                    zoom={isMobile ? 11.5 : 12.5}
                    zoomSnap={0.45}
                    zoomDelta={1}
                    scrollWheelZoom={false}
                    dragging={!isMobile}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url={`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${process.env.NEXT_PUBLIC_OPENMAPTILES_API_KEY}`}
                    />
                    <Circle
                        center={delmenhorstCenter}
                        radius={serviceRadius}
                        pathOptions={{
                            color: 'rgba(0,30,154,0.19)',
                            fillColor: 'rgba(171,184,255,0.76)',
                            fillOpacity: 0.15,
                            weight: 2,
                        }}
                    />
                </MapContainer>
            </div>
            <p className="copyright-disclaim text-subordinary">
                Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify | </a>
                <a href="https://openmaptiles.org/" target="_blank"> © OpenMapTiles | </a>
                <a href="https://www.openstreetmap.org/copyright" target="_blank"> © OpenStreetMap</a> contributors
            </p>
        </div>
    );
}

export default function Map() {
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLElement | null>(null);
    useParallaxScroll(containerRef, parallaxRef, 0.25);
    return (
        <div className={styles["map-window"]}>
            <div className={styles['info-map-space']}></div>
            <div className={styles["map-spacer"]}>
                <LeafletMap />
            </div>
            <div className={styles['info-map-space']}></div>
            <div className={styles['info-map-space']}></div>
            <div className={styles['info-container']}>
                <p className="title">
                    Ihr Technikservice in Delmenhorst und Umgebung.
                </p>
                <div className={styles['info-title-space']}></div>
                <div className={styles["info-checkmark-container"]}>
                    Keine Anfahrtskosten in Delmenhorst. Außerhalb eine Pauschale von 10 EUR.
                </div>
            </div>
            <div className={styles['info-map-space']}></div>
            <div className={styles['info-map-space']}></div>
        </div>
    );
}

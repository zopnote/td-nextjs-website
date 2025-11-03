'use client';

import {MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapClient() {

    const delmenhorstCenter: [number, number] = [53.0492, 8.6151];
    const serviceRadius = 5800;
    return (
        <div className="w-full h-full align-middle flex flex-col">
            <div id={"map"} className="w-full h-full overflow-hidden">
                <MapContainer
                    zoomControl={true}
                    attributionControl={false}
                    center={delmenhorstCenter}
                    zoom={12.5}
                    zoomSnap={0.45}
                    zoomDelta={1}
                    scrollWheelZoom={false}
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
            <p className={"text-subordinary"} style={{alignSelf:"start"}}>Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors</p>
        </div>

    );
}
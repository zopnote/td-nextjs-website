'use client';

import {MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapClient() {

    const delmenhorstCenter: [number, number] = [53.0492, 8.6151];
    const serviceRadius = 5800;
    return (
        <div className="w-full h-full align-middle flex flex-col">
            <div className="w-full h-full overflow-hidden">
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
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Circle
                        center={delmenhorstCenter}
                        radius={serviceRadius}
                        pathOptions={{
                            color: 'rgb(0,0,0)',
                            fillColor: 'rgba(0,0,0,0)',
                            fillOpacity: 0.1,
                            weight: 2,
                        }}
                    />
                </MapContainer>
            </div>
            <p className={"text-subordinary"} style={{alignSelf:"start"}}>© Copyright OpenStreetMap</p>
        </div>

    );
}
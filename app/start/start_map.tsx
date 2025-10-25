'use client';

import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function ServiceMap() {

    const delmenhorstCenter: [number, number] = [53.0492, 8.6151];
    const serviceRadius = 5800;

    return (
        <>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <MapContainer
                    zoomControl={false}
                    attributionControl={false}
                    center={[
                        delmenhorstCenter[0],
                        delmenhorstCenter[1] -0.020
                    ]}
                    zoom={11.5}
                    zoomSnap={0.45}
                    zoomDelta={1}
                    scrollWheelZoom={true}
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
                            color: '#202020',
                            fillColor: 'rgb(0,0,0)',
                            fillOpacity: 0.2,
                            weight: 2,
                        }}
                    />
                </MapContainer>
            </div>
            <p className={"text-subordinary"}>© Copyright OpenStreetMap</p>
        </>

    );
}
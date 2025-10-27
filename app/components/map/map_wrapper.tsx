'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(() => import('./map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full" style={{color: "var(--background)"}}>
            <></>
        </div>
    )
});

export default function Map() {
    return <MapClient/>;
}
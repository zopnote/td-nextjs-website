'use client';

import dynamic from 'next/dynamic';

const ServiceMap = dynamic(() => import('./map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full" style={{color: "var(--background)"}}>
            <></>
        </div>
    )
});

export default function ServiceMapWrapper() {
    return <ServiceMap />;
}
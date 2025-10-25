'use client';

import dynamic from 'next/dynamic';

const ServiceMap = dynamic(() => import('./start_map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-96 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
            <p className="text-muted">Karte wird geladen...</p>
        </div>
    )
});

export default function ServiceMapWrapper() {
    return <ServiceMap />;
}
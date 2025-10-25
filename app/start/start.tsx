import React from "react";
import ServiceMapWrapper from "./start_map_wrapper";

export default function Start() {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center p-8">
            <h1 className="title text-6xl mb-4">Technische Dienstleistungen</h1>
            <p className="text-secondary text-xl mb-8 text-center max-w-2xl">
                Beratung und Hilfe rund um Computer und Geräte.
            </p>

            <div className="w-full max-w-4xl">
                <ServiceMapWrapper />
                <p className="text-muted text-center mt-4">
                    ~6KM um Delmenhorst
                </p>
            </div>
        </section>
    );
}
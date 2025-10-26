"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
    { name: "Home", href: "/home", icon: "🏠" },
    { name: "Explore", href: "/explore", icon: "🔍" },
    { name: "Settings", href: "/settings", icon: "⚙️" },
];

export default function TabBar() {
    const pathname = usePathname();

    return (
        <div className="h-full w-full ">
            <div className="flex justify-around py-2">
                {tabs.map((tab) => {
                    const active = pathname.startsWith(tab.href);
                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={"flex flex-col items-center text-sm transition-colors"}
                            style={{
                                color: active ? "blue" : "gray"
                            }}
                        >
                            <span>{tab.icon}</span>
                            <span>{tab.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

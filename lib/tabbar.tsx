"use client";

import Link from "next/link";
import {CurrencyEuro, Catalog, ArrayObjects, Group, Map} from "@carbon/icons-react";
import {useEffect, useState} from "react";
import styles from './tabbar.module.css';

const tabs = [
    { label: " Zur Übersicht", href: "/", icon: <Catalog size={28}/> },
    { label: " Zum Angebot", href: "prices/", icon: <ArrayObjects size={28}/> },
    { label: " Delmenhorst & Umgebung", href: "map/", icon: <Map size={28}/> },
    { label: " Kontakt", href: "/#contact", icon: <Group size={28}/> },
];

export default function TabBar() {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [isSmallest, setIsSmallest] = useState(false);
    const [isSmaller, setIsSmaller] = useState(false);

    useEffect(() => {
        const handleResizeSmallest = () => setIsSmallest(window.innerWidth < 600);
        handleResizeSmallest();
        window.addEventListener("resize", handleResizeSmallest);
        return () => window.removeEventListener("resize", handleResizeSmallest);
    }, []);

    useEffect(() => {
        const handleResizeSmaller = () => setIsSmaller(window.innerWidth < 1000);
        handleResizeSmaller();
        window.addEventListener("resize", handleResizeSmaller);
        return () => window.removeEventListener("resize", handleResizeSmaller);
    }, []);

    return (
        <div className={styles.container}>
            {isSmaller ? (
                <div className={isSmallest ? styles["flex-mobile"] : styles["grid-mobile"]}>
                    {tabs.map(tab => (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={styles['tab-link']}
                            onMouseEnter={() => setHoveredTab(tab.href)}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <div className={`${styles['tab-content']} ${hoveredTab === tab.href ? styles['hovered-mobile'] : styles.default}`}>
                                <div className={styles['spacer-left-mobile']}></div>
                                <div className={styles['icon-container']}>{tab.icon}</div>
                                <div className={styles["spacer-small"]}></div>
                                {tab.label}
                                <div className={isSmallest ? styles['spacer-right-mobile'] : styles['spacer-left-mobile']}></div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={styles["flex-around"]}>
                    {tabs.map(tab => (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={styles['tab-link']}
                            onMouseEnter={() => setHoveredTab(tab.href)}
                            onMouseLeave={() => setHoveredTab(null)}
                        >
                            <div className={`${styles['tab-content']} ${styles.desktop} ${hoveredTab === tab.href ? styles['hovered-desktop'] : styles.default}`}>
                                {tab.icon}<div className={styles['spacer-tiny']}></div>{tab.label}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

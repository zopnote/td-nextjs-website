/*
Copyright (c) 2025, Lenny Siebert

Permission is hereby granted to use, copy, modify,
and distribute this program for personal or commercial purposes,
provided that only generic content is used. Use of any personal, business,
or proprietary data belonging to the licensor is strictly prohibited.

Protected content includes, but is not limited to:
- Personal or business-related images, texts, offers, or prices
- Forms, databases, or structured data
- Source code containing personal or business information, including email addresses,
API endpoints, or internal structures

The term “developer” refers exclusively to the licensor,
the original creator of this program, or the copyright holder.

This backend is published primarily for educational, portfolio, and demonstration purposes, including:
- Allowing others to understand the technologies used
- Permitting adoption of generic structural or functional patterns
- Showcasing the project as part of the developer’s portfolio

The general structure, methodology, and generic functions of the program may be used,
adapted, or imitated. Any use involving personal or business-specific data of the licensor is strictly forbidden.

THE PROGRAM IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND.
THE LICENSOR SHALL NOT BE LIABLE FOR ANY DAMAGES OR LEGAL CLAIMS ARISING FROM USE,
 PARTICULARLY FROM UNAUTHORIZED USE OF PERSONAL OR BUSINESS DATA.

*/

import styles from '@/lib/footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.spacer}></div>
            <div className={styles.content}>
                © Copyright 2025 Lenny Siebert,
                Alle Rechte im Rahmen <a
                className={styles.link}
                href="https://github.com/zopnote/td-nextjs-website/blob/main/LICENSE.md">
                der Lizenzierung
            </a> vorbehalten.<br/>
                ¹Es liegt keine staatliche Prüfung des Technikers oder ein Masterbrief vor. Keine Reparaturen von <small>SMD</small>, <small>THT</small> oder ähnlichen Technologien.
                ²Richtigkeit und Aktualisierung der Angaben vorbehalten.
                ³Ab dem Preis für den beschriebenen Service. Die Beratungs- und Anfahrtskosten entfallen gegebenenfalls.<br/>

                <br/>
                Urkundschaft des Amtsgerichts Delmenhorst wird nicht ausgehändigt. Gewerbeschein auf Anfrage. Unternehmen ist nicht nach §19 UStG steuerbefreit, USt. wird erhoben.
                Haftungsumfang des Service wird als Teil des Vertragsschlusses bei Inanspruchnahme mit den Parteien abgestimmt.
                <br/><br/><br/>
                <div className={styles.bottomRow}>
                    <a className={styles.columnLink}>
                        <strong>Impressum</strong><br/>
                        Technische Dienstleistungen Lenny Siebert <br/>
                        USt.-ID. (ausstehend) <br/>
                        lennysiebert@tdls-del.de<br/>
                        Wilhelm-Busch Straße 2 <br/>
                        27753 Delmenhorst <br/>
                        Einzelunternehmen (Delmenhorst, 03401000)<br/>
                    </a>
                    <div className={styles.columnLink}>
                        <a
                            className={styles.link}
                            href="/terms">
                            Allgemeine Geschäftsbedingungen (AGB)
                        </a><br/>
                        <Link className={styles.link}
                            href="/">
                            Zurück zur Übersicht
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.spacer}></div>
        </div>
    );
}

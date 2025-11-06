import styles from '@/lib/footer.module.css';

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
                        <a className={styles.link}
                            href="/">
                            Zurück zur Übersicht
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.spacer}></div>
        </div>
    );
}

import Footer from "@/lib/footer";
import TabBar from "@/lib/tabbar";

export default function Terms() {
    return (
        <div className={"flex flex-col"}>
            <div className="max-w-3xl mx-auto p-6 text-slate-800" style={{
                width: "80vw",
                minWidth: "400px",
                alignSelf: "center",
                justifySelf: "center"
            }}>
                <div style={{
                    height: "40vh"
                }}></div>
                <div className="bg-white shadow-md rounded-2xl p-8">
                    <h1 className="text-2xl font-bold mb-1">Allgemeine Geschäftsbedingungen (AGB)</h1>
                    <p className="text-slate-500 mb-6">Technische Dienstleistungen Lenny Siebert (Technikservice Siebert)</p>
                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§1 Geltungsbereich</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen, die <strong>Lenny Siebert</strong> im Rahmen seines Nebengewerbes gegenüber Verbrauchern und Unternehmen erbringt.</li>
                        <li>Hierzu zählen insbesondere:
                            <ul className="list-disc ml-5">
                                <li>Vor-Ort-Service und technische Hilfe bei Hard- und Softwareproblemen;</li>
                                <li>Wartung, Installation und Einrichtung von Geräten;</li>
                                <li>Entwicklung und Anpassung von Software, Webseiten und Apps;</li>
                                <li>Aufbau, Konfiguration und Lieferung von individuell zusammengestellten Computersystemen.</li>
                            </ul>
                        </li>
                        <li>Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, sie wurden ausdrücklich schriftlich vereinbart.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§2 Vertragsschluss</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li>Ein Vertrag kommt zustande, sobald der Kunde das Angebot von <strong>Lenny Siebert</strong> annimmt – mündlich, schriftlich oder durch Inanspruchnahme der Dienstleistung.</li>
                        <li>Bei individuell entwickelter Software, Webseiten oder Hardware erfolgt der Vertragsschluss auf Grundlage eines schriftlichen oder elektronischen Angebots.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§3 Leistungen und Ausführung</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li><strong>Lenny Siebert</strong> erbringt alle Leistungen nach bestem Wissen und Gewissen sowie nach dem aktuellen Stand der Technik.</li>
                        <li>Eine Erfolgsgarantie wird nicht übernommen, insbesondere wenn Ursachen von Störungen außerhalb des Einflussbereichs von <strong>Lenny Siebert</strong> liegen (z. B. Hardwaredefekte, Fremdsoftware, Fehlbedienung oder äußere Einwirkungen).</li>
                        <li>Dienstleistungen können beim Kunden vor Ort oder per Fernwartung erfolgen. Der Kunde stellt sicher, dass ihm die notwendigen Zugriffsrechte und Informationen vorliegen.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§4 Preise und Zahlungsbedingungen</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li>Eine Einschätzung des Preises, für die im voraus absehbar zu erbringende Leistung, wird vor Ausführung der Leistung transparent bereitgestellt.</li>
                        <li>Sofern nichts anderes vereinbart ist, ist die Vergütung nach Abschluss der Dienstleistung sofort in bar, mit einer jeweiligen Zahlungsmethode oder per Überweisung fällig.</li>
                        <li>Material- und Ersatzteilkosten werden als Teil der Rechnung gestellt.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§5 Haftung</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li><strong>Lenny Siebert</strong> haftet für Schäden, die er vorsätzlich oder grob fahrlässig verursacht hat, uneingeschränkt.</li>
                        <li>Für leichte Fahrlässigkeit haftet <strong>Lenny Siebert</strong> nur, wenn wesentliche Vertragspflichten (Kardinalpflichten) verletzt werden. In diesem Fall ist die Haftung auf den typischerweise vorhersehbaren Schaden begrenzt.</li>
                        <li>Wird ein Gerät während einer Reparatur beschädigt und ist zweifelsfrei feststellbar, dass <strong>Lenny Siebert</strong> die Ursache gesetzt hat, wird der entstandene Schaden ersetzt.</li>
                        <li>Für Folgeschäden, Datenverluste oder Funktionsstörungen, die auf bereits bestehende Defekte, Fremdsoftware, unsachgemäße Bedienung oder äußere Einflüsse zurückzuführen sind, wird keine Haftung übernommen.</li>
                        <li>Bei Softwareentwicklungen übernimmt <strong>Lenny Siebert</strong> keine Haftung für Fehler (Bugs), die trotz sorgfältiger Prüfung bestehen bleiben. Er verpflichtet sich jedoch, kritische oder sicherheitsrelevante Fehler nach Bekanntwerden unentgeltlich zu beheben.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§6 Gewährleistung</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li>Gesetzliche Gewährleistungsrechte bleiben unberührt.</li>
                        <li>Eine Nachbesserung gilt als fehlgeschlagen, wenn sie nach zwei Versuchen nicht zum Erfolg führt. In diesem Fall kann der Kunde vom Vertrag zurücktreten oder den Preis mindern.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§7 Datenschutz</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li>Alle personenbezogenen Daten werden vertraulich behandelt und nur im Rahmen der gesetzlichen Vorschriften verwendet.</li>
                        <li>Zugriff auf Geräte oder Daten des Kunden erfolgt ausschließlich zur Durchführung der beauftragten Leistung.</li>
                        <li>Nach Abschluss der Arbeiten werden keine Kundendaten gespeichert, sofern dies nicht ausdrücklich gewünscht oder gesetzlich erforderlich ist.</li>
                        <li>Ausgenommen davon sind Vertrags- & Rechnungsdaten zur Buchführung.</li>
                    </ol>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§8 Eigentumsvorbehalt</h2>
                    <p>Gelieferte Waren und Komponenten bleiben bis zur vollständigen Bezahlung Eigentum von <strong>Lenny Siebert</strong>.</p>

                    <br/>
                    <h2 className="text-lg font-semibold mt-6 mb-2">§9 Schlussbestimmungen</h2>
                    <ol className="list-decimal ml-5 space-y-2">
                        <li>Es gilt deutsches Recht.</li>
                        <li>Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</li>
                        <li>Gerichtsstand ist – soweit gesetzlich zulässig – der Wohnsitz von <strong>Lenny Siebert</strong>.</li>
                    </ol>

                    <p className="text-slate-500 text-sm mt-6">Stand: 6. November 2025</p>
                </div>
            </div>
            <div style={{
                height: "15vh"
            }}></div>
            <Footer></Footer>
        </div>
    );
}

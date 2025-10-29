export default function Info() {
    return (
        <div style={{
            padding: 15,
            width: "70vw",
            alignSelf: "center",
            flexDirection: "column",
            flex: "none"
        }}>
            <p id="map" className={"title"}>
                In Delmenhorst ohne Anfahrtskosten! In der Umgebung Pauschale.
            </p>
            <div style={{height: "10px"}}></div>
            <p className={"text"}>
                Supportdienstleistungen vor Ort in Delmenhorst sind ohne Anfahrtspauschale.
                Außerhalb der Stadt, in Ganderkesee, Schlutter, Hoyerswege, Schönemoor,
                Schierbrok, Hasbergen, Stenum und Almsloh bestehen Anfahrtskosten von 10 Euro.
            </p>
        </div>
    );
}
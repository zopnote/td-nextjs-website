import {CheckmarkFilled, Laptop, Time} from "@carbon/icons-react";
import {useEffect, useState} from "react";

type OpeningHour = {
    day: string;
    justClosed: boolean;
    hoursStart: number;
    minutesStart: number;
    hoursEnd: number;
    minutesEnd: number;
};

const openingHours: OpeningHour[] = [
    { day: "Montag", hoursStart: 15, minutesStart: 30, hoursEnd: 20, minutesEnd: 0, justClosed: false},
    { day: "Dienstag", hoursStart: 13, minutesStart: 50, hoursEnd: 20, minutesEnd: 0, justClosed: false},
    { day: "Mittwoch", hoursStart: 0, minutesStart: 0, hoursEnd: 0, minutesEnd: 0, justClosed: true },
    { day: "Donnerstag", hoursStart: 15, minutesStart: 50, hoursEnd: 20, minutesEnd: 0, justClosed: false},
    { day: "Freitag", hoursStart: 13, minutesStart: 30, hoursEnd: 20, minutesEnd: 0, justClosed: false},
    { day: "Samstag", hoursStart: 8, minutesStart: 0, hoursEnd: 20, minutesEnd: 0, justClosed: false},
    { day: "Sonntag", hoursStart: 8, minutesStart: 0, hoursEnd: 18, minutesEnd: 0, justClosed: false},
];


function createServiceList(items: string[]) {
    const now = new Date();
    return items.map((item, index) => (
        <div
            key={index}
            style={{
                boxSizing: "border-box",
                width: "100%",
            }}
        >
            <div
                className="flex items-center justify-start"
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(0,0,0,0.09)",
                    padding: "0.5rem",
                    borderRadius: 8,
                    color: "#fff",
                    width: "100%",
                    fontSize: "1.25rem",
                    lineHeight: "1.5rem",
                    fontWeight: 400,
                    height: "100%",
                }}
            >
                <div
                    style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CheckmarkFilled color={"#0070f3"} size={24} />
                </div>
                <span>{item}</span>
            </div>
        </div>
    ));
}

export default function DiscountWindow() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 820);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div
            id="discount"
            className="w-full flex flex-col"
            style={{ backgroundColor: "#000", height: "fit-content" }}
        >
            <div
                style={{
                    alignSelf: "center",
                    display: "flex",
                    width: "80vw",
                    height: "fit-content",
                    flexDirection: "column",
                    backgroundColor: "rgb(0,0,0)",
                    padding: "1rem",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{ height: "7vh" }} />
                <div
                    className={"title flex flex-row"}
                    style={{ color: "#fff", alignSelf: isMobile ? "center" : "start" }}
                >
                    <Laptop size={38} />
                    <div style={{ width: 12 }} />
                    Serviceangebot
                </div>
                <div style={{ height: "3vh" }} />
                <div
                    style={{
                        display: "grid",
                        gap: "1rem",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(220px, max-content))",
                        justifyContent: "center",
                        alignItems: "start",
                        width: "100%",
                    }}
                >
                    {createServiceList([
                        "Internet, WLAN & Mobilfunk",
                        "Netzwerkkonfiguration",
                        "Fernseher & Drucker",
                        "Alle Betriebssysteme",
                        "Desktop & Laptop",
                        "iPhone & Android",
                        "Web- & Appentwicklung",
                        "PC Hardware & Software",
                        "Installation von Software",
                        "Kaufberatung",
                        "Virusentfernung & Schutz",
                        "Installation",
                        "Reparatur & Wartung",
                        "PC-Zusammenbau",
                    ])}
                </div>
                <div style={{ height: "12vh" }} />
                <div
                    className="title flex flex-row"
                    style={{ color: "#fff",
                        alignSelf: isMobile ? "center": "start", }}
                >
                    <Time size={38} />
                    <div style={{ width: 12 }} />
                    Öffnungszeiten
                </div>
                <div style={{ height: "3vh" }} />
                <div style={{
                    alignSelf: isMobile ? "center": "start",
                    width: isMobile ? "60vw" : "40vw"
                }}>
                    {openingHours.map((value) => (
                        <div key={value.day} style={{
                            width: "intrinsic",
                            height: "fit-content",
                            flexDirection: "row",
                            alignContent: "space-between",
                            justifyContent: "space-between",
                            display: "flex"
                        }}>

                            <div style={{
                                width: "fit-content",
                                height: "fit-content",
                                color: "white",
                                border: "white",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderRadius: "10px",
                                display: "flex",
                                padding: "0.3rem",
                                flexDirection: "row"
                            }}>{value.day}</div>
                            <div style={{
                                width: "fit-content",
                                height: "fit-content",
                                color: "white",
                                border: "white",
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderRadius: "10px",
                                display: "flex",
                                padding: "0.5rem",
                                flexDirection: "row"
                            }}>{value.justClosed ? "Geschlossen" : value.hoursStart + " : "}{value.justClosed ? "" : value.minutesStart + " - "}{value.justClosed ? "" : value.hoursEnd + " : "}{value.justClosed ? "" : value.minutesEnd}</div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

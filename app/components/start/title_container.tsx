import {LocationFilled, PhoneFilled} from "@carbon/icons-react";
import TabBar from "@/app/components/start/tabbar";
import Image from "next/image";
import {ReactTyped} from "react-typed";
import {useEffect, useState} from "react";
import Link from "next/link";

interface TitleContainerProperties {
    children?: React.ReactNode;
    height?: string;
}
export default function TitleContainer({height, children}: TitleContainerProperties) {
    const [hover, setHover] = useState(false);

    const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");
    useEffect(() => {
        const updateFlexDirection = () => {
            setFlexDirection(window.innerWidth < 768 ? "column" : "row");
        };

        updateFlexDirection();
        window.addEventListener("resize", updateFlexDirection);

        return () => {
            window.removeEventListener("resize", updateFlexDirection);
        };
    }, []);
    return (

        <div style={{display: "flex", flexDirection: "column",
            justifyContent: "space-around",
        }}>
            <header className={"h-30 p-4"} style={{
                display: "flex",
                flexDirection: flexDirection,
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around"
            }}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={298}
                    height={298}
                    priority={true}
                />
                <div className={"flex flex-row items-center justify-center"}>
                    <Link className={"text-subordinary"}
                          onMouseEnter={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                          href={"#map"} style={{
                        display: "flex",
                        color: hover ? "#9a9a9a" : "black",
                        flexDirection: "row",
                        alignItems: "center",
                        fontSize: "1rem",
                        padding: 5,
                    }
                    }>
                        <LocationFilled size="22"/><div style={{width: "5px"}}></div>Delmenhorst & Umgebung
                    </Link>
                    <div style={{width: "5px"}}></div>
                    <PhoneFilled size="24"/><div style={{width: "5px"}}></div>(04221) 2922185
                </div>
            </header>

            <hr className={"border-primary"} style={{width: "50vw", border: "none", height: "5vw"}}/>
            <div className={"title"} style={{
                alignSelf:"start",
                fontSize: "2.5rem",
                fontWeight: "bold",
                width: "60vw",
                padding: 15
            }}>
                Probleme mit dem{" "}<ReactTyped
                strings={[
                    "PC?",
                    "Handy?",
                    "Fernseher?",
                    "Router?",
                    "WLAN?",
                    "Drucker?",
                ]}
                typeSpeed={100}
                backSpeed={100}
                backDelay={1500}
                loop
            />
            </div>
            <div className={"title"} style={{
                alignSelf:"start",
                width: "60vw",
                padding: 15
            }}>
                Schnelle Hilfe und günstiger Service! Sparen Sie sich Zeit und Geld.
            </div>

            <hr className={"border-primary"} style={{width: "50vw", border: "none", height: "5vw"}}/>
            <div className={"title-container"} style={{
                height,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                margin: 0,
                padding: 0}}>
                <TabBar/>
                {children}
            </div>
        </div>
    );
}
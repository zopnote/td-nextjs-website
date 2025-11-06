import TabBar from "@/lib/tabbar";
import Image from "next/image";
import {ReactTyped} from "react-typed";
import {useEffect, useState} from "react";
import {useWindowAttributes} from "@/hooks/window_attributes";

interface TitleContainerProperties {
    children?: React.ReactNode;
    height?: string;
}
export default function TitleContainer({height, children}: TitleContainerProperties) {
    const {isMobile: isMobile, width: windowWidth} = useWindowAttributes(620);


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
                height: "fit-content",
                justifyContent: "space-around"
            }}>
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={298}
                    height={298}
                    priority={true}
                />

            </header>

            <hr style={{width: "50vw", border: "none", height: isMobile ? "0vh" : "5vh"}}/>
            <div style={{
                alignSelf: "center",
            }}>
                <div className={"title"} style={{
                    alignSelf:"center",
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    width: "80vw",
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
                    width: "80vw",
                    padding: 15
                }}>
                    Schnelle Hilfe und günstiger Service! Sparen Sie sich Zeit und Geld.
                </div>
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
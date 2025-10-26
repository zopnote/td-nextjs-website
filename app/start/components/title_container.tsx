import {LocationFilled} from "@carbon/icons-react";
import TabBar from "@/app/start/components/title_container/tabbar";
import Image from "next/image";
interface TitleContainerProperties {
    children?: React.ReactNode;
    height?: string;
}
export default function TitleContainer({height, children}: TitleContainerProperties) {
    return (
        <div style={{display: "flex", flexDirection: "column",
            justifyContent: "space-around",
        }}>
            <header className={"h-30 p-4"} style={{
                display: "flex",
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

                <p className={"text-subordinary"} style={{display: "flex", flexDirection: "row", alignItems: "center"}}><LocationFilled size="24" />  Delmenhorst</p>
            </header>
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
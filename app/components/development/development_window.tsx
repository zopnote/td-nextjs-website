
import {useEffect, useState} from "react";
import {CheckmarkFilled, Code, LogoGithub} from "@carbon/icons-react";

export default function DevelopmentWindow() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div
            id="dev"
            className={"w-full h-full align-middle flex flex-col"}
            style={{
                backgroundColor: "#000000",
            }}
        >
            <div style={{height: "10vh"}}/>
            <div className={"w-full align-middle flex flex-col"}>
                <div style={{
                    padding: 15,
                    height: "100%",
                    width: "70vw",
                    alignSelf: "center",
                    flexDirection: "column",
                    flex: "none",
                }}>
                    <div
                        className={"title flex-row flex"}
                        style={{
                            color: "#ffffff",
                            alignItems: "center",
                        }}>
                            Günstige Umsetzung Ihrer Projekte!
                            <div style={{width: "12px"}}/>
                            <Code size={42}/>
                    </div>

                    <div style={{
                        height: isMobile ? "0px" : "25px"
                    }}></div>
                    <div className={isMobile ? "flex-col flex align-middle content-center" : "flex-row flex"}>

                        {!isMobile ? <GithubProfile username={"zopnote"}/> : <></>}
                        <div style={isMobile ? {height: "60px"} : {width: "50px"}}></div>
                        <div className={"flex-col flex h-full w-full"}>
                            <div style={{height: isMobile ? "0px": "20px"}}></div>
                            <span className={"text"} style={{
                                color: "#ffffff",
                            }}>
                            Als Student und über mehrere Jahre konnte ich Erfahrungen aus Projekten sammeln. Ich entwickle, wenn nicht anders erwünscht, mit:
                        </span>
                            <div style={{height: isMobile ? "14px" : "7px"}}></div>
                            {["Mobile & Desktop (Dart, Flutter / .NET)", "Web (NextJS - React, TSX, Tailwind)", "Server, Native & CLI (Go, Dart & C)"].map((tech, index) => (
                                <div key={index} className={"flex-row flex p-2"} style={{color: "#ffffff"}}>
                                    <CheckmarkFilled size={24} style={{color: "#0070f3"}}/>
                                    <div style={{width: "7px"}}></div>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{height: "30px"}}></div>
                    <span className={"text"} style={{
                        color: "#ffffff",
                    }}>
                        Ich entwickle Ihnen Websites, Server-, Desktop- und Mobilanwendungen.
                        Dabei greife ich auf gewünschte Technologien zurück und halte mich an
                        Ihr Design oder entwerfe ein eigenes für Sie. Ob modern, klassisch oder stilistisch,
                        ich helfe Ihnen gerne mit Ihrer Idee. Wir können uns digital oder persönlich absprechen.
                </span >
                    <div style={{height: "30px"}}></div>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: "center",
                    }}>
                        <div className={"flex-col flex"} style={{
                            width: "100%",
                        }}>
                            <span className={"text"} style={{
                                color: "#ffffff",
                            }}>
                                <strong>Ab 119 EUR inkl. MwSt</strong>
                            </span>
                            <div/>
                            <span className={"text"} style={{fontSize: "smaller", color: "#ffffff"}}>
                                Kostenvoranschlag möglich.
                            </span>
                        </div>
                        <div style={isMobile ? {height: "30px"} : {width: "10vw"}}></div>
                        <div className={"hover:bg-black flex flex-row"} style={{
                            backgroundColor: "#0070f3",
                            color: "#ffffff",
                            width: "270px",
                            height: "50px",
                            fontSize: "1.5rem",
                            fontWeight: "400",
                            alignSelf: "start",
                            borderRadius: "10px",
                            cursor: "pointer",
                        }}>
                            <div style={{width: "14%"}}></div>
                            <div style={{
                                padding: "6px",
                                width: "240px",
                            }}>
                                Anfrage stellen
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height: "5vh"}}></div>
        </div>
    );
}



type GitHubUser = {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio?: string;
    followers: number;
    following: number;
    public_repos: number;
};

function GithubProfile({username}: { username: string }) {
    const [user, setUser] = useState<GitHubUser | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(console.error);
    }, [username]);

    if (!user) return (
        <div className="w-full max-w-sm border p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Lade GitHub Profil...</p>
        </div>
    );

    return (
        <div
            className="w-full h-full max-w-sm border border-bbg-[#353c43] rounded-xl shadow-sm overflow-hidden" style={{backgroundColor: "#24292e", border: "3px solid #353c43"}}>
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-bbg-[#353c43] text-white">
                <LogoGithub className="w-5 h-5"/>
                <span className="font-semibold">GitHub</span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col items-center text-center" style={{backgroundColor: "#16181b"}}>
                <div className="flex flex-row">
                    <div style={{width: "100%", height: "100%"}}>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="rounded-full border  shadow-sm hover:scale-105 transition-transform"
                                style={{width: "90px", height: "90px"}}
                            />
                        </a>
                    </div>
                    <div style={{width: "17px"}}></div>
                    <div className={"flex-col flex"} >
                        <div style={{height: "10px"}}></div>
                        <h2 className="mt-3 text-lg font-semibold " style={{color: "#ffffff"}}>
                            {user.name ?? user.login}
                        </h2>
                        <p className=" text-sm" style={{color: "#a6a6a6"}}>@{user.login}</p>
                    </div>
                </div>
                <div style={{height: "10px"}}></div>
                <div className="flex gap-4 mt-3 text-sm" style={{color: "#ffffff"}}>
                    <span><strong>{user.public_repos}</strong> Repos</span>
                    <span><strong>{user.followers}</strong> Follower</span>
                    <span><strong>{user.following}</strong> Following</span>
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 text-center" style={{
                backgroundColor: "#16181b",
                borderTop: "1px solid #31353a",
            }}>
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{color: "#9da9ff"}}
                >
                    Profil auf GitHub ansehen →
                </a>
            </div>
        </div>
    );
}


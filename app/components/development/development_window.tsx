export default function DevelopmentWindow() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1000);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div id={"dev"} className={"w-full align-middle flex flex-col"} style={ {padding: 15}}>
            <div style={{
                padding: 15,
                height: "50vh",
                width: "70vw",
                alignSelf: "center",
                flexDirection: "column",
                flex: "none"
            }}>
                <div className={isMobile ? "flex-col flex align-middle content-center" : "flex-row flex"}>

                    <GithubProfile username={"zopnote"} />
                    <div style={isMobile ? {height: "60px"} : {width: "50px"}}></div>
                    <div className={"flex-col flex h-full w-full"}>

                        <div className={"title"}>
                            Sechs Jahre Erfahrung für Ihre Projekte!
                        </div>
                        <div style={{height: "10px"}}></div>
                        <span className={"text"}>
                            Über mehrere Jahre konnte ich Erfahrungen aus Projekten sammeln. Ich entwickle, wenn nicht anders erwünscht, mit:
                        </span>
                        <div style={{height: isMobile ? "14px" : "7px"}}></div>
                        {["Mobile & Desktop (Dart, Flutter / .NET)", "Web (NextJS - React, TSX)", "Server, Native & CLI (Go, Dart & C)"].map((tech, index) => (
                            <div key={index} className={"flex-row flex p-2"} >
                                <CheckmarkFilled size={24} style={{color: "#0070f3"}}/>
                                <div style={{width: "7px"}}></div>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{height: "30px"}}></div>
                <span className={"text"}>
                    <strong>Kurz</strong>, ich entwickle Ihnen Websites, Server-, Desktop- und Mobilanwendungen.
                    Dabei greife ich auf gewünschte Technologien zurück und halte mich an
                    Ihr Design oder entwerfe ein eigenes für Sie. Ob modern, klassisch oder stilistisch,
                    ich helfe Ihnen gerne mit Ihrer Idee.
                </span>
                <div style={{height: "30px"}}></div>
                <span className={"text"}>
                    <strong>Kostenvoranschlag möglich.</strong>
                </span>
            </div>
        </div>
    );
}


import { useEffect, useState } from "react";
import {CheckmarkFilled, LogoGithub} from "@carbon/icons-react"; // schickes Icon (optional)

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

function GithubProfile({ username }: { username: string }) {
    const [user, setUser] = useState<GitHubUser | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(console.error);
    }, [username]);

    if (!user) return (
        <div className="w-full max-w-sm border border-gray-300 bg-gray-50 p-4 rounded-xl shadow-sm">
            <p className="text-gray-500 text-sm">Lade GitHub Profil...</p>
        </div>
    );

    return (
        <div className="w-full  max-w-sm border border-gray-300 bg-[#f6f8fa] rounded-xl shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 bg-[#24292e] text-white">
                <LogoGithub className="w-5 h-5" />
                <span className="font-semibold">GitHub</span>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col items-center text-center">
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-24 h-24 rounded-full border border-gray-300 shadow-sm hover:scale-105 transition-transform"
                    />
                </a>
                <h2 className="mt-3 text-lg font-semibold text-gray-900">
                    {user.name ?? user.login}
                </h2>
                <p className="text-gray-500 text-sm">@{user.login}</p>
                {user.bio && (
                    <p className="mt-2 text-gray-700 text-sm leading-snug">{user.bio}</p>
                )}
                <div className="flex gap-4 mt-3 text-gray-700 text-sm">
                    <span><strong>{user.public_repos}</strong> Repos</span>
                    <span><strong>{user.followers}</strong> Follower</span>
                    <span><strong>{user.following}</strong> Following</span>
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-200 bg-gray-400 text-center">
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                >
                    Profil auf GitHub ansehen →
                </a>
            </div>
        </div>
    );
}


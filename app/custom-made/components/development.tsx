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

'use client';
import {useEffect, useState} from "react";
import {CheckmarkFilled, Code, LogoGithub} from "@carbon/icons-react";
import text from "./development.json";
import styles from "./development.module.css";
import {useWindowAttributes} from "@/hooks/window_attributes";

export default function Development() {
    const {isMobile} = useWindowAttributes(1120);
    return (
        <div id="dev" className={styles.rootContainer}>
            <div className={styles.spacer}></div>
            <div className={styles.alignmentContainer}>
                <div className={styles.innerContainer}>
                    <div className={`title flex-row flex ${styles.innerContainer}`}>
                        {text.title}
                            <div style={{width: "12px"}}/>
                            <Code size={42}/>
                    </div>
                    <div style={{
                        height: isMobile ? "0px" : "25px"
                    }}></div>
                    <div className={isMobile ? "flex-col flex align-middle content-center" : "flex-row flex"}>
                        {!isMobile ? <GithubProfile username={text.githubUsername}/> : <></>}
                        <div style={isMobile ? {height: "60px"} : {width: "50px"}}></div>
                        <div className={"flex-col flex h-full w-full"}>
                            <div style={{height: isMobile ? "0px": "20px"}}></div>
                            <span className={"text"} style={{
                                color: "#ffffff",
                            }}>
                            {text.brief}
                        </span>
                            <div style={{height: isMobile ? "14px" : "7px"}}></div>
                            {text.technologies.map((tech, index) => (
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
                        {text.description}
                </span>
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
                                <strong>{text.tag}</strong>
                            </span>
                            <div/>
                            <span className={"text"} style={{fontSize: "smaller", color: "#ffffff"}}>
                                {text.tagLower}
                            </span>
                        </div>
                        <div style={isMobile ? {height: "30px"} : {width: "10%"}}></div>
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
                                {text.button}
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


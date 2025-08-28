"use client";

import Typewriter from "@/components/typewriter";
import TerminalLog from "@/components/terminallog";
import React from "react";
import useFirstTime from "@/components/firsttimeroute";

const projects = [
    {
        title: "CTF Writeups",
        url: "https://github.com/korekim/ctf-challenges",
        items: ["Find my CTF writeups here!"],
    },
    {
        title: "Github Portfolio",
        url: "https://github.com/korekim/portfolio",
        items: [
            "Now powered by Next.js, currently deployed on Vercel",
            <>
                Run this page locally with MiniKube{" "}
                <strong><a href="/blog/minikube">here</a></strong>
            </>,
            "Coming Soon: Cloud migration with Docker containers + Kubernetes orchestration",
        ],
    },
];

export default function ProjectsPage() {
    const isFirstTime = useFirstTime();
    
    if (!isFirstTime) {
        return (
            <main>
                <div className="projects">
                    <h2>Projects</h2>
                    <div className="project-container">
                        <div className="project-card">
                            {projects.map((project) => (
                                <React.Fragment key={project.title}>
                                    <h3>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            {">"} {project.title}
                                        </a>
                                    </h3>
                                    <ul>
                                        {project.items.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    
    return (
        <main>
            <div className="projects">
                <h2><Typewriter speed={20}>{isFirstTime ? "Projects" : "> Projects"}</Typewriter></h2>
                <div className="project-container">
                    <div className="project-card">
                        {projects.map((project, index) => {
                            // Calculate title delay based on previous projects
                            const getTitleDelay = () => {
                                let delay = 1000; // Initial delay after "Projects"
                                for (let i = 0; i < index; i++) {
                                    // Add time for previous title and its items
                                    delay += (projects[i].title.length * 20) + // Title typing time
                                            (projects[i].items.length * 400) + // Time for terminal logs
                                            400; // Buffer
                                }
                                return delay;
                            };

                            // Calculate terminal log delays to start after its title
                            const getItemDelay = (itemIndex: number) => {
                                const titleDelay = getTitleDelay();
                                return titleDelay + 
                                       (project.title.length * 20) + // Wait for title to finish
                                       (itemIndex * 400) + // Stagger items
                                       400; // Buffer
                            };

                            const titleDelay = getTitleDelay();

                            return (
                                <React.Fragment key={project.title}>
                                    <h3>
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            <Typewriter
                                                speed={20}
                                                startDelay={titleDelay}
                                            >
                                                &gt; {project.title}
                                            </Typewriter>
                                        </a>
                                    </h3>
                                    <ul>
                                        {project.items.map((item, idx) => (
                                            <TerminalLog
                                                key={idx}
                                                lines={React.Children.toArray(item)}
                                                startDelay={isFirstTime ? getItemDelay(idx) : 0}
                                                wrapWithLi={true}
                                            />
                                        ))}
                                    </ul>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}

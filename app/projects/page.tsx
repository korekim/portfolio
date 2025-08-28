import Typewriter from "@/components/typewriter";
import TerminalLog from "@/components/terminallog";
import React from "react";

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
            "Now powered by Neext.js, currently deployed on Vercel",
            <>
                Run this page locally with MiniKube{" "}
                <strong><a href="/blog/minikube">here</a></strong>
            </>,
            "Coming Soon: Cloud migration with Docker containers + Kubernetes orchestration",
        ],
    },
];

export default function ProjectsPage() {
    return (
        <main>
            <div className="projects">
                <h2><Typewriter>Projects</Typewriter></h2>
                <div className="project-container">
                    <div className="project-card">
                        {projects.map((project) => (
                            <React.Fragment key={project.title}>
                                <h3>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Typewriter
                                            speed={20}
                                            startDelay={(projects.findIndex(p => p.title === project.title) + 1) * 1000}
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
                                            startDelay={((projects.findIndex(p => p.title === project.title) + 1) * 1000) + ((idx + 1) * 300) + 500}
                                            wrapWithLi={true}
                                        />
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

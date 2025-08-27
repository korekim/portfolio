import React from "react";

const projects = [
    {
        title: "CTF Writeups",
        url: "https://github.com/korekim/ctf-challenges",
        items: ["Find my CTF writeups here!"],
    },
    {
        title: "Github Portfolio",
        url: "https://github.com/korekim/korekim.github.io",
        items: [
            "Next.js integration coming soon",
            "Potential switch to cloud hosting with containerized deployment",
        ],
    },
];

export default function ProjectsPage() {
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
                                        &gt; {project.title}
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

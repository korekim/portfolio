"use client";

import React from "react";
import Link from 'next/link';
import Typewriter from "@/components/typewriter";
import TerminalLog from "@/components/terminallog";
import useFirstTime from "@/components/firsttimeroute";


const blogs = [
    {
        title: "My First Defcon!",
        url: "/blog/defcon33",
        items: ["A post from my LinkedIn about my first Defcon experience!"],
    },
    {
        title: "An Unlikely Analogy for Threat Modeling: Rock Climbing?! (coming soon)",
        url: "/blog/climbing-and-cyber",
        items: ["How rock climbing and cybersecurity are more similar than one might think!",],
    },
    {
        title: "How to Run This Page in MiniKube",
        url: "/blog/minikube",
        items: ["A guide on running this webapp locally in a MiniKube environment."],
    },
];

export default function BlogPage() {
    const isFirstTime = useFirstTime();

    if (!isFirstTime) {
        return (
            <main>
                <div className="container">
                    <h2>Blog</h2>
                    <div className="blogs">
                        {blogs.map((blog) => (
                            <React.Fragment key={blog.title}>
                                <h3>
                                    <a href={blog.url}>
                                        &gt; {blog.title}
                                    </a>
                                </h3>
                                <ul key={`${blog.title}-list`}>
                                    {blog.items.map((item, idx) => (
                                        <li key={`${blog.title}-${idx}`}>{item}</li>
                                    ))}
                                </ul>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </main>
        );
    }

    // Calculate title delays
    const getTitleDelay = (index: number) => {
        let delay = 1000; // Initial delay after "Blog"
        for (let i = 0; i < index; i++) {
            // Add time based on previous entries (title typing + terminal log + buffer)
            const prevTitle = blogs[i].title;
            delay += (prevTitle.length * 20) + 900; // Title typing time + buffer
        }
        return delay;
    };

    // Calculate terminal log delays to start after its title
    const getTerminalDelay = (index: number) => {
        const titleDelay = getTitleDelay(index);
        return titleDelay + (blogs[index].title.length * 20) + 700; // Wait for title to finish + small buffer
    };

    return (
        <main>
            <div className="container">
                <h2>
                    <Typewriter speed={20}>Blog</Typewriter>
                </h2>
                <div className="blogs">
                    {blogs.map((blog, index) => {
                        const titleDelay = getTitleDelay(index);
                        const terminalDelay = getTerminalDelay(index);
                        return (
                            <React.Fragment key={blog.title}>
                                <h3>
                                    <a href={blog.url}>
                                        <Typewriter startDelay={titleDelay} speed={20}>
                                            &gt; {blog.title}
                                        </Typewriter>
                                    </a>
                                </h3>
                                <ul key={`${blog.title}-list`}>
                                    <TerminalLog
                                        speed={400}
                                        startDelay={terminalDelay}
                                        lines={blog.items.map((item, idx) => (
                                            <li key={`${blog.title}-${idx}`}>{item}</li>
                                        ))}
                                    />
                                </ul>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
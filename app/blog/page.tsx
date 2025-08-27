import React from "react";
import Link from 'next/link';

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
                            <ul>
                                {blog.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </main>
    );
}
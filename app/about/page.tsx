"use client";

import Link from 'next/link';
import TypeReveal from '@/components/typewriter';
import AsciiTerminal from '@/components/ascii-terminal';
import { Art } from '@/constants/ascii-art';
import React, { useState } from 'react';
import useFirstTime from '@/components/firsttimeroute';

const aboutData = {
    paragraphs: [
        {
            text: "Originally from Santa Monica, California, I moved to Boulder, Colorado, to pursue both my education and my passion of rock climbing. I originally attended CU Boulder as a Chemistry Major, but realized that it was not the subject for me. I took a year of academic leave to re-evaluate my interests, explored different areas of interest, and discovered that I could apply the skills that I learned in climbing to cybersecurity. (You can find a blogpost about that ",
            link: {
                text: "here (coming soon)",
                href: "/blog/climbing-and-cyber"
            },
            ending: ")."
        },
        {
            text: "I started pursuing my BS in Cybersecurity and Information Assurance at Western Governor's University in July 2024, and quickly fell in love with the subject. I spent the first year of the program mainly focusing on gaining certifications, but after ",
            link: {
                text: "attending Defcon33",
                href: "/blog/defcon33"
            },
            continuation: ", I've taken on many personal projects to get more hands-on experience. These projects will probably pop up ",
            secondLink: {
                text: "here",
                href: "/projects"
            },
            ending: " and/or on my LinkedIn, so keep an eye out!"
        },
        {
            text: "Now, I'm very interested in internship opportunities in cybersecurity. I'm excited to put my expanding skillset to the test, and absorb as much information as I can to become the best version of myself possible! Please reach out to me at jacobjwkim@gmail.com, or through LinkedIn, which can be found at the bottom of this page along with my resume."
        }
    ]
};

export default function AboutPage() {
    const isFirstTime = useFirstTime();
    const [currentParagraph, setCurrentParagraph] = useState(-1);

    const handleHeaderComplete = () => {
        setCurrentParagraph(0);
    };

    const handleParagraphComplete = () => {
        if (currentParagraph < aboutData.paragraphs.length - 1) {
            setCurrentParagraph(prev => prev + 1);
        }
    };

    if (!isFirstTime) {
        return (
            <main>
                <div className="about">
                    <h2>About Me</h2>
                    <div className="ascii-container">
                        <div className="ascii-art">
                            {Art.join('\n')}
                        </div>
                    </div>
                    <div className="about-me">
                        <div className="about-description">
                            {aboutData.paragraphs.map((paragraph, index) => (
                                <div key={index} className="mb-8">
                                    <>
                                        {paragraph.text}
                                        {paragraph.link && (
                                            <Link href={paragraph.link.href}>
                                                <strong>{paragraph.link.text}</strong>
                                            </Link>
                                        )}
                                        {!paragraph.secondLink && paragraph.ending}
                                        {paragraph.continuation}
                                        {paragraph.secondLink && (
                                            <>
                                                <Link href={paragraph.secondLink.href}>
                                                    <strong>{paragraph.secondLink.text}</strong>
                                                </Link>
                                                {paragraph.ending}
                                            </>
                                        )}
                                    </>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="about">
                <h2>
                    <TypeReveal speed={50} onComplete={handleHeaderComplete}>
                        About Me
                    </TypeReveal>
                </h2>
                <div className="ascii-container">
                    <div className="ascii-art">
                        <AsciiTerminal 
                            lines={Art}
                            speed={42}
                            className="font-mono whitespace-pre"
                        />
                    </div>
                </div>
                <div className="about-me">
                    <div className="about-description">
                        {aboutData.paragraphs.map((paragraph, index) => (
                            <div key={index} className="mb-8">
                                {index === currentParagraph ? (
                                    <TypeReveal 
                                        speed={5} 
                                        onComplete={handleParagraphComplete}
                                    >
                                        {paragraph.text}
                                        {paragraph.link && (
                                            <Link href={paragraph.link.href}>
                                                <strong>{paragraph.link.text}</strong>
                                            </Link>
                                        )}
                                        {!paragraph.secondLink && paragraph.ending}
                                        {paragraph.continuation}
                                        {paragraph.secondLink && (
                                            <>
                                                <Link href={paragraph.secondLink.href}>
                                                    <strong>{paragraph.secondLink.text}</strong>
                                                </Link>
                                                {paragraph.ending}
                                            </>
                                        )}
                                    </TypeReveal>
                                ) : index < currentParagraph && (
                                    <>
                                        {paragraph.text}
                                        {paragraph.link && (
                                            <Link href={paragraph.link.href}>
                                                <strong>{paragraph.link.text}</strong>
                                            </Link>
                                        )}
                                        {!paragraph.secondLink && paragraph.ending}
                                        {paragraph.continuation}
                                        {paragraph.secondLink && (
                                            <>
                                                <Link href={paragraph.secondLink.href}>
                                                    <strong>{paragraph.secondLink.text}</strong>
                                                </Link>
                                                {paragraph.ending}
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
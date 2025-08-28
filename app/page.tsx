"use client";

import TerminalLog from "@/components/terminallog";
import Typewriter from "@/components/typewriter";
import React from "react";
import useFirstTime from "@/components/firsttimeroute";

interface Section {
  title: string;
  items: (string | React.ReactElement)[];
}

const pageData = {
  welcome: "Welcome to my portfolio!",
  bio: "I am a passionate cybersecurity student focused on developing skills in network security, penetration testing, and security analysis. Currently pursuing my degree in Cybersecurity, I am dedicated to understanding and defending against evolving digital threats.",
  sections: [
    {
      title: "Skills",
      items: [
        "Network Security",
        "Linux Systems",
        "Python Programming",
        "Adaptability",
        "Problem Solving",
        "Tenacity"
      ]
    },
    {
      title: "Certifications",
      items: [
        "CompTIA Security+",
        "Associate of ISC2, SSCP Certified",
        "CompTIA Network+",
        "CompTIA A+",
        "ITIL Foundation v4"
      ]
    },
    {
      title: "Resume",
      items: [
        <a href="./public/JakeResume.pdf" className="download-btn">
          Download Resume (PDF)
        </a>
      ]
    }
  ] as Section[]
};

const Page = () => {
  const isFirstTime = useFirstTime();

  if (!isFirstTime) {
    return (
      <main>
        <h2>{pageData.welcome}</h2>
        <div className="bio">
          <p>{pageData.bio}</p>
          {pageData.sections.map((section, index) => (
            <React.Fragment key={section.title}>
              <h3>{">"} {section.title}</h3>
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
          <br />
        </div>
      </main>
    );
  }

  return (
    <main>
      <h2>
        <Typewriter speed={20}>{pageData.welcome}</Typewriter>
      </h2>
      <div className="bio">
        <p>
          <Typewriter startDelay={1000} speed={5}>
            {pageData.bio}
          </Typewriter>
        </p>

        {pageData.sections.map((section, index) => (
          <React.Fragment key={section.title}>
            <h3>
              <Typewriter startDelay={(index + 2) * 2000} speed={20}>
                {`> ${section.title}`}
              </Typewriter>
            </h3>
            <ul>
              <TerminalLog 
                speed={200} 
                startDelay={(index + 2) * 2000 + 500} 
                lines={React.Children.toArray(section.items.map(item => (
                  <li>{item}</li>
                )))}
              />
            </ul>
          </React.Fragment>
        ))}
        <br />
      </div>
    </main>
  );
};

export default Page;
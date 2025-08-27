import TerminalLog from "@/components/terminallog";
import Typewriter from "@/components/typewriter";
import React from "react";


const Page = () => (
  <main>
    <h2><Typewriter speed={20}>
      {"Welcome to my portfolio!"}
    </Typewriter></h2>
    <div className="bio">
      <p>
        <Typewriter 
          startDelay={1000}
          speed={1}
        >
          {"I am a passionate cybersecurity student focused on developing skills in network security, penetration testing, and security analysis. Currently pursuing my degree in Cybersecurity, I am dedicated to understanding and defending against evolving digital threats."}
        </Typewriter>
      </p>

      <h3><Typewriter startDelay={3000} speed={20}>
        {"> Skills"}
      </Typewriter></h3>
      <ul>
        <TerminalLog speed={200} startDelay={3500} lines={React.Children.toArray([
          <li>Network Security</li>,
          <li>Linux Systems</li>,
          <li>Python Programming</li>,
          <li>Adaptability</li>,
          <li>Problem Solving</li>,
          <li>Tenacity</li>,
        ])}/>
      </ul>

      <h3>
        <Typewriter startDelay={5000} speed={20}>
          {"> Certifications"}
        </Typewriter>
      </h3>
      <ul>
        <TerminalLog speed={200} startDelay={5500} lines={React.Children.toArray([
          <li>CompTIA Security+</li>,
          <li>Associate of ISC2, SSCP Certified</li>,
          <li>CompTIA Network+</li>,
          <li>CompTIA A+</li>,
          <li>ITIL Foundation v4</li>,
        ])}/>
      </ul>

      <h3>
        <Typewriter startDelay={7000} speed={20}>
          {"> Resume:"}
        </Typewriter>
      </h3>
      <ul>
        <TerminalLog speed={200} startDelay={7500} lines={React.Children.toArray([
          <li>
        <a href="./public/JakeResume.pdf" className="download-btn">
          Download Resume (PDF)
        </a>
          </li>,
        ])}/>
      </ul>
      <br />
    </div>
  </main>
);

export default Page;
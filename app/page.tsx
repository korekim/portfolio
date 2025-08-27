import TerminalLog from "@/components/terminallog";
import Typewriter from "@/components/typewriter";
import React from "react";


const Page = () => (
  <main>
    <h2><Typewriter children={["Welcome to my portfolio!"]} speed={20} /></h2>
    <div className="bio">
      <p>
        <Typewriter 
          children={["I am a passionate cybersecurity student focused on developing skills in network security, penetration testing, and security analysis. Currently pursuing my degree in Cybersecurity, I am dedicated to understanding and defending against evolving digital threats."]} 
          startDelay={1000}
          speed={1}
          />
      </p>

      <h3><Typewriter children={["> Skills"]} startDelay={3000} speed={20}/></h3>
      <ul>
        <TerminalLog speed={200} startDelay={3500} lines={[
          <li>Network Security</li>,
          <li>Linux Systems</li>,
          <li>Python Programming</li>,
          <li>Adaptability</li>,
          <li>Problem Solving</li>,
          <li>Tenacity</li>,
        ]}/>
      </ul>

      <h3>
        <Typewriter children={["> Certifications"]} startDelay={5000} speed={20} />
      </h3>
      <ul>
        <TerminalLog speed={200} startDelay={5500} lines={[
          <li>CompTIA Security+</li>,
          <li>Associate of ISC2, SSCP Certified</li>,
          <li>CompTIA Network+</li>,
          <li>CompTIA A+</li>,
          <li>ITIL Foundation v4</li>,
        ]}/>
      </ul>

      <h3>
        <Typewriter children={["> Resume:"]} startDelay={7000} speed={20} />
      </h3>
      <ul>
        <TerminalLog speed={200} startDelay={7500} lines={[
          <li>
        <a href="./public/JakeResume.pdf" className="download-btn">
          Download Resume (PDF)
        </a>
          </li>,
        ]}/>
      </ul>
      <br />
    </div>
  </main>
);

export default Page;
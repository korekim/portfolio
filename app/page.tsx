import React from "react";

const Page = () => (
  <main>
    <h2>Welcome to my portfolio!</h2>
    <div className="bio">
      <p>
        I am a passionate cybersecurity student focused on developing skills in network security, penetration testing, and security analysis. Currently pursuing my degree in Cybersecurity, I am dedicated to understanding and defending against evolving digital threats.
      </p>

      <h3>&gt; Skills</h3>
      <ul>
        <li>Network Security</li>
        <li>Linux Systems</li>
        <li>Python Programming</li>
        <li>Adaptability</li>
        <li>Problem Solving</li>
        <li>Tenacity</li>
      </ul>

      <h3>&gt; Certifications</h3>
      <ul>
        <li>CompTIA Security+</li>
        <li>Associate of ISC2, SSCP Certified</li>
        <li>CompTIA Network+</li>
        <li>CompTIA A+</li>
        <li>ITIL Foundation v4</li>
      </ul>

      <h3>&gt; Resume:</h3>
      <ul>
        <li>
          <a href="./public/JakeResume.pdf" className="download-btn">
            Download Resume (PDF)
          </a>
        </li>
      </ul>
      <br />
    </div>
  </main>
);

export default Page;
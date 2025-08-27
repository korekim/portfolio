import React from "react";
import Link from "next/link";
import "./globals.css";
import Typewriter from "../components/typewriter";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1 className="header-text">
            <Link href="/"><Typewriter text="/users/Jacob_Kim/Cybersecurity_Portfolio " /></Link>
          </h1>
          <nav className="header-nav">
            <div className="nav-buttons">
              <Link href="/">
                <button>Home</button>
              </Link>
              <Link href="/projects">
                <button>Projects</button>
              </Link>
              <Link href="/blog">
                <button>Blog</button>
              </Link>
              <Link href="/about">
                <button>About Me</button>
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; Jacob Kim</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/jacob-j-w-kim-584b69189/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span> | </span>
            <a href="https://github.com/korekim" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span> | </span>
            <a href="mailto:jacobjwkim@gmail.com">Email</a>
            <span> | </span>
            <a href="./JakeResume.pdf" target="_blank" rel="noopener noreferrer">Resume(PDF)</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
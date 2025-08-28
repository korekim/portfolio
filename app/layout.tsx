"use client";

import React from "react";
import Link from "next/link";
import "./globals.css";

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
            <Link href="/">/users/Jacob_Kim/Cybersecurity_Portfolio</Link>
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
              <button
                className="refresh-button"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
                title="Replay animations"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                </svg>
              </button>
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
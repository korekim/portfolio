import Link from 'next/link';

export default function AboutPage() {
    return (
        <main>
            <div className="about">
                <h2>About Me</h2>
                <div className="about-me">
                    <p>
                        Originally from Santa Monica, California, I moved to Boulder, Colorado, to pursue both my education and my passion of rock climbing. I originally attended CU Boulder as a Chemistry Major, but realized that it was not the subject for me. I took a year of academic leave to re-evaluate my interests, explored different areas of interest, and discovered that I could apply the skills that I learned in climbing to cybersecurity. (You can find a blogpost about that{' '}
                        <Link href="/blog/climbing-and-cyber">
                            <strong>here (coming soon)</strong>
                        </Link>
                        ).
                        <br />
                        <br />
                        I started pursuing my BS in Cybersecurity and Information Assurance at Western Governor&apos;s University in July 2024, and quickly fell in love with the subject. I spent the first year of the program mainly focusing on gaining certifications, but after{' '}
                        <Link href="/blog/defcon33">
                            <strong>attending Defcon33</strong>
                        </Link>
                        , I&apos;ve taken on many personal projects to get more hands-on experience. These projects will probably pop up{' '}
                        <Link href="/projects">
                            <strong>here</strong>
                        </Link>
                        {' '}and/or on my LinkedIn, so keep an eye out!
                        <br />
                        <br />
                        Now, I&apos;m very interested in internship opportunities in cybersecurity. I&apos;m excited to put my expanding skillset to the test, and absorb as much information as I can to become the best version of myself possible! Please reach out to me at jacobjwkim@gmail.com, or through LinkedIn, which can be found at the bottom of this page along with my resume.
                        <br />
                    </p>
                </div>
            </div>
        </main>
    );
}
import Link from 'next/link';

export default function BlogPage() {
    return (
        <main>
            <div className="container">
                <h2>Blog</h2>
                <div className="blogs">
                    <h3>
                        <Link href="/blog/defcon33">
                            {'> My First Defcon!'}
                        </Link>
                    </h3>
                    <h3>
                        <Link href="/blog/climbing-and-cyber">
                            {'> An Unlikely Analogy for Threat Modeling: Rock Climbing?! (coming soon)'}
                        </Link>
                    </h3>
                </div>
            </div>
        </main>
    );
}
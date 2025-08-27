import React from "react";

const MiniKubePage: React.FC = () => (
    <main>
        <div className="container">
            <h2>How to Run This Page in MiniKube</h2>
            <div className="blogpost">
                <p>
                    First, make sure that you have <strong>Docker</strong>, <strong>MiniKube</strong>, and <strong>npm</strong> installed on your machine.<br />
                    You also need to clone the repo by running:<br /><br />
                    <code>git clone https://github.com/korekim/portfolio.git</code> 
                </p>
                <br />
                <p>
                    Next, build the app image:<br /><br />
                    <code>docker build -t portfolio:dev .</code>
                </p>
                <br />
                <p>
                    Then, start MiniKube and load the image:<br /><br />
                    <code>minikube start</code><br /><br />
                    <code>minikube image load portfolio:dev</code>
                </p>
                <br />
                <p>
                    Apply the Kubernetes manifests:<br /><br />
                    <code>kubectl apply -f k8s/</code>
                </p>
                <br />
                <p>
                    Forward the service port:<br /><br />
                    <code>kubectl port-forward svc/portfolio-svc 8080:80</code>
                </p>
                <br />
                <p>
                    Now the page will be viewable at <code>localhost:8080</code>
                </p>
                <br />
            </div>
        </div>
    </main>
);

export default MiniKubePage;
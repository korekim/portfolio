This is a [Next.js](https://nextjs.org) port of my Github Portfolio bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

It is currently deployed [here](https://jacob-kim-portfolio.vercel.app/)

How to run locally with MiniKube:

First, make sure that you have Docker, MiniKube, and npm installed on your machine. You also need to clone the repo by running "git clone https://github.com/korekim/portfolio.git"

Next, run `docker build -t portfolio:dev .` to build the app image.

Finally, run:
`minikube start`
`minikube image load portfolio:dev`
`kubectl apply -f k8s/"`
`kubectl port-forward svc/portfolio-svc 8080:80`

Now the page will be viewable at `localhost:8080`

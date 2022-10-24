This is a calculator application for our sweng group project for group 27.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/parse](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/parse.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Run on Docker

The image should allow you to build and deploy the image on a docker container.
First make sure you have docker installed on your machine.
Then:
1. Build the Container: `docker build -t calculator .`
2. Run the Container: `docker run -p 3000:3000 calculator`

The application should now be running on port 3000 and will be available at http://localhost:3000 like a usual next.js application.

## Learn More

The application is built using several technologies, to learn more, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Mocha](https://mochajs.org/) - a javascript testing framework.
- [Chai](https://www.chaijs.com/) - an assertion library for javascript.
- [Docker](https://www.docker.com/) - a containerisation platform.
- [Github Actions](https://docs.github.com/en/actions) - a CI/CD platform.

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

## Git workflow
In order to submit your code, you should use a workflow like this. This makes sure that the right versions of the code are in the repo, and that we're all working off the same code. 

1. If you havent already, use `git pull` on the whatever branch your on. This is especially the case for dev and main branches. 
2. After pulling the branch, use `git checkout` to get on to the dev branch.
3. If you don't have the dev branch on your local machine, use `git fetch` and then `git switch dev` to get the remote dev branch. 
3. When you're adding code,(assuming you've just used git pull), you can use `git checkout -b dev-f<BRANCH_NAME>` eg `git checkout -b dev-f-myfeature` The f in this case is for a feature branch.
4. Now in your feature branch you can add your code. 
5. When you're adding code, add it in small pieces, not all at once. 
6. When you've finished a small piece you can add it to staging with `git add myfile.js` You can also do this with vscode or some other editor. 
7. Then commit your code using `git commit -m"Some brief message telling us what the code is doing"`
8. When you've commit your code, then you can push your branch with `git push -u origin dev-f-<BRANCH_NAME>` eg `git push -u origin dev-f-myfeature`
9. Go the repository on github.com, and make a pull request to the DEV BRANCH. ONLY PUSH TO THE DEV BRANCH, unless there is some reason not to. 
10. Assign some other person to review the code, and then they will merge the code in to dev.
11. In your own dev branch you can start all over again by using `git pull`

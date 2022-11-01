# Design Document

## Overview
- **status**: In progress
- **Members**: 
    - Daniel Madaghjian
    - Indigo Bosworth
    - Neil Shevlin
    - Ryan Baird

The aim of this project is to build a calculator web application, which uses CI/CD practices, containerisation, test driven development and proffessional version control paradigms.

## Context

---
### Goal
The goal of this project is to build a calculator implemented as a web app. We want to containerise this application and deploy it to docker hub. In the process of this deployment, we want to put the application through a series of integration tests, which ensure fewer mistakes in a production deployment. The application itself should take some input as a string, and parse the string for proper mathematical syntax, and return the answer as a string. 

### Specific Features
1. We plan for the application itself to be a React web application. This react app will be available in the browser. It will expose an input, which allows the user to type in some string which represents their desired mathematical command. 
2. The application will handle the mathematical logic on the client side, using functions in javascript.
3. The logic for handling mathematical strings will be run through unit tests to ensure that there are only correct implementations of the parsing logic being pushed to production. 
4. The application will use Mocha and Chai as it's testing framework and assertion library respectively. 
5. An image will be created for the application using Docker. This image will be used to containerise the application at a later pipeline stage.
6. The application image will be built and a container deployed in Docker Hub. 
7. There will be a CI/CD pipeline using github actions, which will control whether specific images get sent to Docker Hub.

### Tasks and timeline
- [X] Setup the initial react application.
- [X] Write Docker file for react application.
- [X] Write Github actions file to trigger on pushing application to main.
- [X] Configure Github actions to take image and deploy to Docker Hub.
- [X] Implement input functionality in the react application to accept some string.
- [ ] Write unit tests for the application logic (parsing maths strings).
- [X] Integrate unit tests with github actions.
- [ ] Write mathematical parsing logic to pass the unit test and integrations tests.
- [ ] Deploy in two releases.

### Additional assignment features
- [ ] Can handle both integers and floating-point numbers.
- [ ] Should be capable of performing addition, subtraction, multiplication, division, and power (^).
- [ ] Should be able to work with expressions containing brackets.
- [ ] Should be capable of performing the log (natural log) and exp functions.
- [ ] The results should be rounded off to 3 decimal places.
- [ ] The user interface should be designed properly.
- [ ] Document with description, features, contribution, link to repo, and graph of commit log.
- [ ] Video showing a demo of the web app.
- [ ] Add the account ‘demonstrators’ to the repo.


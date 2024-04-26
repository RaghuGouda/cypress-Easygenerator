# Cypress Easygenerator

This repository contains automated tests written in Cypress for testing the Easygenerator Practice Page.

## Prerequisites

Before running the tests in this repository, ensure that you have the following prerequisites installed:

- **Node.js**: The tests are written using Cypress, which requires Node.js to be installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

- **Cypress**: Cypress is the testing framework used in this repository. Install Cypress globally by running the following command:
  ```bash
  npm install -g cypress

## :To start: Setup

1. `git clone https://github.com/RaghuGouda/cypress-Easygenerator.git`
2. cd to `cypress-Easygenerator` folder and run `npm install`

## :To Test: Run tests
1. To run in headless mode 
   ```bash
  npm run cypress-run

2. To run in UI mode 
   ```bash
  npm run cypress-open


## :IMP: 3-rd party libraries Information
1. In cypress test codeing `cypress-iframe` is being used for testing iFrame
2. `http-server,concurrently and wait-on` is used for hosting web and then ruuning tests 
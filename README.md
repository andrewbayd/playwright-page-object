## Page Object Model Pattern with Playwright

![alt text](./playwright-logo.png)

This repository contains simple automation test framework written with TypeScript and Playwright and implements Page Object Model Pattern.

If you want to run test locally, please follow these steps:

1. Clone this repository
2. Make sure you have `node.js` installed. If you don't, please visit [official website](https://nodejs.org/en/download/) for instructions 
3. Run `npm install` to install node modules
4. That's it, now you can run tests with `npm run test` - it will run test in 3 browsers (chromium, firefox, webkit) in parallel.

If you want to run it in headed mode, then change configuration to `headless: true` in `playwright.config.js`

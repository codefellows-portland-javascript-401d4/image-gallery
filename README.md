# Angular Image Gallery

Author:
- Niilo Smeds

## About

A simple image gallery app built with [Angular] (https://angularjs.org), [Node] (https://nodejs.org/en/), [Express] (https://expressjs.com), [MongoDB] (https://www.mongodb.com/) and [Webpack] (https://webpack.github.io/). Accepts image file links with url and description, and renders them in the browser with optional views of detail, thumbnail and gallery. The list of images is editable with add and remove buttons.

## Installation

1. Fork or clone this repo.
1. Run `npm install` in both /app and /server to set up dependencies.
1. In /app, run `npm start` to start the app or `npm test` to test with karma.
1. In /server, run `mongod` to start the mongo server, then run `npm start` and visit [http://localhost:3000] (http://localhost:3000) to interact with the app, or run `npm test` to test with mocha.
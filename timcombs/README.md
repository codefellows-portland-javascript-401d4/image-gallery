# Angular Image Gallery
## a Javascript fueled image gallery - lab for Code Fellows 401.

### Collaborators
  - Tim Combs


### Project Functionality
  - This is a Code Fellows Project to create an image gallery that uses Angular.
  - Browse All Pix - displays all the images
    - List view - gives image title, url, description
    - Thumb view - gives image thumbnail image
    - Full view - gives image title, full-size image, description
  - Albums - displays the Albums
    - List view - gives title and description
    - Thumb view - give title and thumbnail image

  - Add image component - adds one new image to the database
  - Add album component - adds one new album to the database

  - When in albums, remove button deletes album from the gallery
  - When in iamges, remove button deletes images from the gallery


### Technologies used for front end side
  - For app
    - Javascript
    - Angular

  - For development
    - Chai
    - Mocha
    - Karma
    - Webpack
    - Eslint

  - Make sure to run npm install from the app directory to install dependencies
  - Please refer to the app/package.json for more info

### Technologies used for server side
  - For app
    - Javascript
    - Angular
    - body-parser
    - cors
    - debug
    - express
    - mongoose
    - mongoDB

  - For development
    - Chai
    - Mocha
    - Karma
    - Nodemon
    - Eslint
    - Morgan

  - Make sure to run npm install from the server directory to install dependencies
  - Please refer to the server/package.json for more info


### Directions to run locally
  - Download the files
  - Set up project
    - 1) start the database
      - Open a terminal window and at the CLI type:
      ```
      gomongo
      ```
    - 2) start the app
      - Open another terminal window, navigate to the app folder and at the CLI type: 
      ```
      npm start
      ```
    - 3) start the server
      - Open another terminal window, navigate to the server folder and at the CLI type:
      ```
      npm start
      ```
    - 4) Then open a browser window and navigate to the address localhost:8080

  - Please refer to the app/package.json for info about app scripts
  - Please refer to the server/package.json for info about server scripts


### Testing

- Set Up
    - Make sure you have the app, server and database running per "Directions to run locally"
    
    - To run the server test suite, from the command line at the root of the project directory type:
      ```
      $ npm test
      ```
    - this will first run eslint - for more info look at .eslintrc
    - then mocha runs unit tests

    - To run the app test suite, when in app directory at cli type:
      ```
      $ npm test
      ```
    - this will first run eslint - for more info look at .eslintrc
    - then karma uses mocha to run Angular unit tests

    - To run the protractor test suite, when in app directory at cli type:
      ```
      $ npm run e2etest
      ```
    - then protractor uses jasmine to run e2e tests

### Code Shape
  - The code has been vetted using eslint & Travis-CI

### Collborations/Questions/issues
  - Not currently looking for collaborators at this time
  - Always looking for suggestions
  - Any questions and concerns can be handled by opening an issue on the codebase

### License
  - Licensed under the Creative Commons Non Commercial license - see LICENSE.md for more info

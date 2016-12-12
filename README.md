# Angular Image Gallery
## a Javascript fueled image gallery - lab for Code Fellows 401.

### Collaborators
  - Tim Combs


### Project Functionality
  - This is a Code Fellows Project to create an image gallery that uses Angular.
  - List component - renders title, url, description
  - Thumb component - renders thumbnail image
  - Image component - renders image, title, description
  - Add component - adds one new image to the database

  - under the gallery header: list, thumb and view buttons toggle between component views
  - under the toggle view buttons: a set of input fields and an add button allow for adding new images

  - in each component the remove button deletes image from the gallery
  - list, view or thumb buttons with each list, thumb or view item go to the specific component view


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


### Code Shape
  - The code has been vetted using eslint & Travis-CI

### Collborations/Questions/issues
  - Not currently looking for collaborators at this time
  - Always looking for suggestions
  - Any questions and concerns can be handled by opening an issue on the codebase

### License
  - Licensed under the Creative Commons Non Commercial license - see LICENSE.md for more info

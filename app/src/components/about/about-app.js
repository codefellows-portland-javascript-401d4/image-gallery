export default {
  template:
  `    <h2>About this Gallery Software</h2>
    <p>This image Gallery is written in Javascript/ES6 using Angular 1 and
        a component-based architecture. The app is built using webpack.
        It runs on an Express web server with MongoDB for document storage
        (using Mongoose for validation). The server-side API provides basic
        CRUD routes (GET, POST, PUT, DELETE) available at /api/gallery
    </p>
    <p>To play with the code yourself, checkout
        <a href="https://github.com/GloriaAnholt/image-gallery/">my
            image-gallery repo on Github</a>.
        A full suite of tests for the server are found
        in server/test/, somewhat less comprehensive tests are available for
        the front end in app/test.
    </p>`
};
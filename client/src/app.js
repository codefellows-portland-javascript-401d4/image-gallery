import angular from 'angular';
import './scss/main.scss';
//gets index.js from components directory
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';


const app = angular.module('myApp', [
    components,
    services,
    uiRouter
]);

app.config(routes);

const dev = 'http://localhost:3000/api';

// gives the service "object" directly
//same as:
// app.factory('apiUrl', function() {
//     return dev;
// });
app.value('apiUrl', dev);


import angular from 'angular';
import './scss/main.scss';
//gets index.js from components directory
import components from './components';
import services from './services';


const app = angular.module('myApp', [
    components,
    services
]);

const dev = 'http://localhost:3000/api';

// gives the service "object" directly
//same as:
// app.factory('apiUrl', function() {
//     return dev;
// });
app.value('apiUrl', dev);


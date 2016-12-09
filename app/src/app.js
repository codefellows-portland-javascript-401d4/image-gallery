import angular from 'angular';
import './css/main.css';

import components from './components';
import services from './services';

const app = angular.module('myApp', [components, services]);

const dev = 'http://localhost:5000/api';

app.value('apiUrl', dev);

// app.factory('apiUrl', function() {
//   return dev;
// });

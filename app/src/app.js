import angular from 'angular';
import './scss/main.scss';

//pick up index.js from components & services folder
import components from './components';
import services from './services';

const app = angular.module('myApp', [
  components,
  services
]);

app.value('apiUrl', 'http://localhost:3000/api');


// const dev = 'http://localhost:3000/api';
// const prod = '/api/';

// .value gives service 'object' directly to angular
// app.value('apiUrl', dev);

// above is same as ...
// app.factory('api.Url', function() {
//   return dev;
// });

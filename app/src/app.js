import angular from 'angular';
import './css/main.css';

//grabs index.js from components dir
import components from './components';
import services from './services'; 

const app = angular.module('myApp', [
  components,
  services
]);

const dev = 'http://localhost:3500/api';

//.value serves service obj to angular - could use:
//app.factory('apiUrl', function() {
//  return dev;
//})
app.value('apiUrl', dev); //eslint-disable-line


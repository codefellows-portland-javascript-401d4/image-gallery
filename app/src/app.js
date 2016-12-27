import angular from 'angular';
import './scss/main.scss';

//pick up index.js from components & services folder
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

app.value('apiUrl', 'http://localhost:3000/api');

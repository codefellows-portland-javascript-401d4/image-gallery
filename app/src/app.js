import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';

const dev = 'http://localhost:3000/api';
const app = angular.module('galleryApp', [
  components, 
  services, 
  uiRouter
]);

app.config(routes);
app.value('apiUrl', dev);

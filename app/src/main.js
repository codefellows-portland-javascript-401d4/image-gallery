import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
// import defaultRoute from 'angular-ui-router-default';
import routes from './routes'; 

const app = angular.module('myApp', [components, services, uiRouter]);

app.config(routes);

app.value('apiUrl', 'http://localhost:3500/api');
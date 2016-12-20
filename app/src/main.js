import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uiRouter from 'angular-ui-router';
import routes from './routes';
import defaultRoute from 'angular-ui-router-default';

const app = angular.module('myApp', [
    components, 
    services, 
    uiRouter, 
    defaultRoute
]);

app.config(routes);

const dev = 'http://localhost:3000/api';

app.value('apiUrl', dev);


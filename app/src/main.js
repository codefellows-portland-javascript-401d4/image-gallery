import angular from 'angular';
import components from './components';
import services from './services';
import './scss/main.scss';
import uiRouter from 'angular-ui-router';
import defaultRoute from 'angular-ui-router-default';
import routes from './routes';

const app = angular.module('myApp', [components, services, uiRouter, defaultRoute]);

app.config(routes);
app.run(['$state', function() {}]);

const dev = 'http://localhost:3000/api';

app.value('apiUrl', dev);
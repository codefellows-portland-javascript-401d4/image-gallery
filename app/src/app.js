import angular from 'angular';
import './scss/main.scss';

import components from './components';
import services from './services';

const app = angular.module('myApp', [components, services]);

const dev = 'http://localhost:5000/api';

app.value('apiUrl', dev);

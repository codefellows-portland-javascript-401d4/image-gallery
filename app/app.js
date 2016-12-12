import angular from 'angular';
import components from './src/components';
import services from './src/services';
import './main.css';

const app = angular.module('image', [components, services]);

const dev = 'http://localhost:8080/api';

app.value('apiUrl', dev);
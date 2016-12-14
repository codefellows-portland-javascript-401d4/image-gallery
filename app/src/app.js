import angular from 'angular';
import components from './components';
import services from './services';
import './scss/main.scss';

const app = angular.module('myApp', [
    components,
    services
]);

const dev = 'http://localhost:3000/api';

app.value('apiUrl', dev);

app.factory('apiUrl', function() {
    return dev;
});

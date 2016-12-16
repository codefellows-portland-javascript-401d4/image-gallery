/** Created by Gloria Anholt on 12/6/16. **/

import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';
import uirouter from 'angular-ui-router';
import routes from './routes';

const devServer = 'http://localhost:3000/api/';

const app = angular.module('imageGallery',
  [components, services, uirouter]
);

app.config(routes);
app.value('apiUrl', devServer); // make server available at app creation
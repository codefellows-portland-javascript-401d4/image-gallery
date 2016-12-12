/** Created by Gloria Anholt on 12/6/16. **/

import angular from 'angular';
import './css/main.css';
import components from './components';
import services from './services';

const app = angular.module('imageGallery', [components, services]);

const devServer = 'http://localhost:3000/api/gallery';

// make the value of the server available to angular at app creation
app.value('apiUrl', devServer);
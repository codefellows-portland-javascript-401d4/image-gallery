import angular from 'angular';
import imageService from './image-service';
import albumService from './album-service';

const service = angular.module('service', [])
  .factory('imageService', imageService)
  .factory('albumService', albumService);

export default service.name;
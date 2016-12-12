import angular from 'angular';

var galleryService = angular.module('galleryService', []);

// .factory in angular returns an object - including functions, because js
galleryService.factory('galleryService',
  ['$http', 'apiUrl', function($http, apiUrl) {

    return {
      get: function() {
        return $http.get(`${apiUrl}/`)
          .then(res => {
            return res.data;
          });
      }
    };
  }]);

export default galleryService.name;


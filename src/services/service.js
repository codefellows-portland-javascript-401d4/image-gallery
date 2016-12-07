import angular from 'angular';

const ImageService = angular.module('ImageService', [])
.service({
    'title': 'bunny',
    'description': 'An adorable baby bunny',
    'url': 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
});

export default ImageService.service;
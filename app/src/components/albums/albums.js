import template from './albums.html';

export default {
  template,
  bindings: {
    albums: '<',
    addImage: '<'
  },
  controller,
  controllerAs: 'albumsCtrl'
};

controller.$inject = ['albumService'];

function controller(albumService) {

  this.add = image => {
    this.addImage(image)
      .then(saved => {
        const albumId = saved.album;
        albumService.get(albumId)
          .then(saved => {
            this.albums.push(saved);
          });
      });
  };
}
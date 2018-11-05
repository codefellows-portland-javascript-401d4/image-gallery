import template from './album-detail.html';

export default {
  template,
  bindings: {
    album: '<',
    id: '<',
    name: '<'
  },
  controller
};

controller.$inject = ['albumService'];

function controller(albums) {

  this.$onInit = () => {
    albums.get(this.id).then(album => {
      this.album = album;
    });
  };

}
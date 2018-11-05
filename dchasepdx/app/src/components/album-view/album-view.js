import template from './album-view.html';

export default {
  template,
  bindings: {
    albums: '<'
  },
  controller
};

controller.$inject = ['albumService'];

function controller (albums) {
  albums.get().then(albums => {
    this.albums = albums;
  });
}

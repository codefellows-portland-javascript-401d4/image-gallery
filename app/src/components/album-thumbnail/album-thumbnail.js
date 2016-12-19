import template from './album-thumbnail.html';

export default {
  template,
  bindings: {
    id: '<',
    view: '<'
  },
  controller
};

controller.$inject = ['albumService'];

function controller(albums) {
  this.$onInit = () => {
    console.log('what is happening', this.id);
    albums.getId(this.id).then(album => {
      console.log(album);
      this.album = album;
    });
  };

  this.uiOnParmasChanged = params => {
    this.view = params.view;
  };
}
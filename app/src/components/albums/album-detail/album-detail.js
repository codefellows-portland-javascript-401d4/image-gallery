import template from './album-detail.html';

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
    albums.get(this.id).then(album => {
      this.album = album;
      console.log(album);
    });
  };	

  this.uiOnParamsChanged = params => {
    console.log(params);
    this.view = params.view;
  };

}
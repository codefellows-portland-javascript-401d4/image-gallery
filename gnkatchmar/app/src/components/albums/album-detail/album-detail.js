import template from './album-detail.html';

export default {
  template,
  bindings: { 
    id: '<',
    view: '<' 
  },
  controller
};

controller.$inject = ['albumService', 'imageService'];

function controller(albums, images) {

  this.$onInit = () => {
    albums.get(this.id).then(album => {
      this.album = album;
      this.images = album.images;
    });
  };	

  this.uiOnParamsChanged = params => {
    this.view = params.view;
  };

  this.add = image => {
    this.loading = true;
    images.add(image)
            .then(saved => {
              this.loading = false;
              this.images.push(saved);
            });
  };

}
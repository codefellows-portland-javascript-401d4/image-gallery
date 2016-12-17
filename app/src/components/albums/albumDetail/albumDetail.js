import template from './albumDetail.html';

export default {
  template,
  bindings: {
    id: '<',
    viewType: '<'
  },
  controller,
  controllerAs: 'albumDetailCtrl'
};

controller.$inject = ['albumService'];

function controller(albumService) {

  this.$onInit = () => {
    albumService.get(this.id).then(album => {
      console.log('albServGet', album);
      this.album = album;
    });
  };

  // this.uiOnParamsChanged = params => {
  //   this.viewType = params.viewType;
  // };
}
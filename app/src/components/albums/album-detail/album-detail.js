import template from './album-detail.html';
import styles from './album-detail.scss';

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

  this.styles = styles;

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
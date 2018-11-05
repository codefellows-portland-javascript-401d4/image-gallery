import template from './deleteAlbum.html';
import styles from './deleteAlbum.scss';

export default {
  template,
  bindings: {
    album: '=',
    removeAlbum: '<'
  },
  controller,
  controllerAs: 'deleteCtrl'
};

function controller() {
  this.styles = styles;

  this.delete = () => {
    this.removeAlbum(this.album);
  };
}
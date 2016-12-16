import template from './album-list.html';
import styles from './album-list.scss';

export default {
  template,
  bindings: {
    album: '=',
    remove: '<',
    toggleAlbum: '<'
  },
  controller,
  controllerAs: '$list'
};

function controller() {
  this.styles = styles;
}
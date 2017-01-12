import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    album: '<'
  },
  controller,
  controllerAs: 'albumMain'
};

function controller(){
  this.styles = styles;
}

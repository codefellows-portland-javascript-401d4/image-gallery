import template from './new-album.html';
import styles from './new-album.scss';

export default {
  template,
  bindings: {
    add: '<',
    remove: '<'
  },
  controller,
};

function controller () {

  this.styles = styles;

  this.reset = () => {
    this.title = '';
    this.description = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      description: this.description
    });
    this.reset();
  };
}
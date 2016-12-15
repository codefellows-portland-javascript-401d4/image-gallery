import template from './image-add.html';
import styles from './image-add.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller,
  controllerAs: '$add'
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.description = '';
    this.url = '';
  };

  this.reset();

  this.addOneImage = () => {
    this.add({
      name: this.name,
      description: this.description,
      url: this.url,
      album: this.album
    });

    this.reset();
  };

}
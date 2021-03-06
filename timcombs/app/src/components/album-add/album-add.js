import template from './album-add.html';
import styles from './album-add.scss';

export default {
  template,
  bindings: {
    addAlbum: '<',
    albums: '<'
  },
  controller,
  controllerAs: '$addAlbum'
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.description = '';
  };

  this.reset();

  this.addOneAlbum = () => {
    this.addAlbum({
      name: this.name,
      description: this.description,
    });

    this.reset();
  };

}
import template from './image-add.html';
import styles from './image-add.scss';

export default {
  template,
  bindings: {
    addImage: '<',
    albums: '<'
  },
  controller,
  controllerAs: '$addImage'
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.description = '';
    this.url = '';
    this.album = '';
  };

  this.reset();

  this.addOneImage = () => {
    this.addImage(
      {
        name: this.name,
        description: this.description,
        url: this.url,
        albumId: this.myAlbum
      }
        );
    this.reset();
  };

}
import template from './add-img.html';
import styles from './add-img.scss';

export default {
  template,
  controller,
  bindings: {
    album: '<'
  }
};

controller.$inject = ['imageService'];

function controller(images) {

  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.src = '';
    this.description = '';
  };

  this.addNew = () => {
    images.add({
      name: this.name,
      src: this.src,
      description: this.description,
      albumId: this.album._id
    })
      .then(saved => {
        this.images.push(saved);
      });
    this.reset();
  };
}
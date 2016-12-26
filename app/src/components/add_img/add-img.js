import template from './add-img.html';
import styles from './add-img.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {

  this.styles = styles;

  this.reset = () => {
    this.name = '';
    this.src = '';
    this.description = '';
  };

  images.get().then(images => {
    this.images = images;
  });

  this.addNew = () => {
    images.add({
      name: this.name,
      src: this.src,
      description: this.description
    })
      .then(saved => {
        this.images.push(saved);
      });
    this.reset();
  };
}
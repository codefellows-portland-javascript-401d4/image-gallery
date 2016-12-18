import template from './add-img.html';
import style from './add-img.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(images) {

  this.style = style;

  this.reset = () => {
    this.name = '';
    this.src = '';
    this.description = '';
  };

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
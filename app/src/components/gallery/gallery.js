import template from './gallery.html';
import styles from './gallery.scss';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.styles = styles;
  this.view = 'Info';

  imageService.get()
    .then(images => {
      this.img = images;
    });

  this.add = image => {
    imageService.add(image)
      .then(saved => this.img.push(saved));
  };

  this.remove = image => {
    imageService.remove(image._id)
      .then(() => {
        const index = this.img.indexOf(image);
        if (index > -1) this.img.splice(index, 1);
      });
  };

}
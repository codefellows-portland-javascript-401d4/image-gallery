import template from './gallery.html';
import styles from './gallery.scss';

export default {
  template,
  bindings: {
    album: '<'
  },
  controller
};

controller.$inject = ['imageService'];

function controller(imageService) {
  this.styles = styles;
  this.view = 'info';

  // imageService.get()
  //   .then(images => {
  //     this.img = images;
  //   })
  //   .catch(err => {
  //     console.log('Initial get all catch', err);
  //   });

  this.add = image => {
    imageService.add(image)
      .then(saved => this.img.push(saved))
      .catch(err => {
        console.log('Add img catch', err);
      });
  };

  this.remove = image => {
    imageService.remove(image._id)
      .then(() => {
        const index = this.img.indexOf(image);
        if (index > -1) this.img.splice(index, 1);
      })
      .catch(err => {
        console.log('Gallery remove catch', err);
      });
  };

}
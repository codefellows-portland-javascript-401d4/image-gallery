import template from './parent-comp.html';
import stylesParent from './parent-comp.scss';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller (images) {

  this.stylesParent = stylesParent;
  this.loading = true;

  images.get()
    .then(images => {
      console.log(images);
      this.loading = false;
      this.images = images;
    });

  this.add = image => {
    this.loading = true;
    images.add(image)
      .then(saved => {
        this.loading = false;
        this.images.push(saved);
      });
  };
}

  // this.data = [
  //   {title: 'Bunny Photo',
  //     description: 'Picture of a cute bunny!',
  //     url: 'f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
  //     fullImage: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
  //     thumbnail: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'}
  // ];
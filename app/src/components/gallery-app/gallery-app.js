import template from './gallery-app.html';

export default {
  template,
  controller
};

controller.$inject = ['imageService'];

function controller(imgSvc) {
  imgSvc.get()
    .then(images => {
      this.img = images[0];
    });
}


// this.img = {
//     title: 'Bunny',
//     url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
//     description: 'Some sort of bunny.'
//   };
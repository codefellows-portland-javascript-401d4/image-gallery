import template from './image-app.html';

export default {
  template,
  controller
};

function controller() {
  this.image = {
    title: 'Seal',
    description: 'Precious baby harp seal rests on the Arctic ice',
    url: 'http://animals.nationalgeographic.com/animals/photos/baby-animals/#/baby-harp-seal_230_600x450.jpg'
  };
  this.selected = 'detail';
}

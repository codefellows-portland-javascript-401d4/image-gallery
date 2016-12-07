import template from './image-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.images = [
    {name: 'anarchobunny', url: 'http://photos1.blogger.com/blogger/7318/426/1600/anarchobunny.jpg'}
  ];

  this.remove = image => {
    const index = this.images.indexOf(image);
    if (index > -1) this.images.splice(index, 1);
  };

}
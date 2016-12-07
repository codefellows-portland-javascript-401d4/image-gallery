import template from './image-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.toggleView = 'list';

  this.images = [
    {name: 'anarchobunny', description: 'this is anarchobunny, he likes tools, syndicalists and bandanas', url: 'http://photos1.blogger.com/blogger/7318/426/1600/anarchobunny.jpg'}
  ];

  this.remove = image => {
    const index = this.images.indexOf(image);
    if (index > -1) this.images.splice(index, 1);
  };

  this.toggleView = name => {
    console.log('in image-app name', name);
    return name;
  };


}
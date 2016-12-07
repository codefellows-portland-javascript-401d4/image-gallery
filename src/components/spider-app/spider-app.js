import template from './spider-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.spiders = [
        { name: 'Igor', type: 'zebra' }
  ];

  this.remove = spider => {
    const index = this.spiders.indexOf(spider);
    if (index > -1) this.spiders.splice(index, 1);
  };

  this.add = spider => this.spiders.push(spider);
}
